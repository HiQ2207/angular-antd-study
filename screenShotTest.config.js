var phantomjsPath = 'D:\phantomjs-2.1.1-windows\bin\phantomjs.exe'
var screenShotTestPath = 'D:\Desktop\Study\AngularTest\AnguarDemoAntd\screenShotTest.config.js'

var page = require('webpage').create();

// var address = 'https://www.mianshigee.com/project/fwouts-react-screenshot-test'; //填写需要打开的地址路径

var address = 'http://localhost:4200/base/echartscustomview'
// var address = 'https://10.67.1.5/WebApi/visual_MIDP/static/dist/#/choreography/graphsManage';

var output = './src/app/screenShot/test4.png'; //截图文件路径和名称

page.viewportSize = {
width: 1280,
height: 800
};
//设置长宽

page.open(address, function (status) {
    console.log('status', status);
    if (status !== 'success') {
        console.log('Unable to load the address!');
        phantom.exit();
    } else {
        console.log('Able to load the address!');
        window.setTimeout(function () {
            var length = page.evaluate(function () {
                // var div = document.getElementById('introduction'); //要截图的div的id

                var div = document.getElementById('canvas'); //要截图的div的id
                // var div = document.getElementById('root'); //要截图的div的id
                var bc = div.getBoundingClientRect();
                var topX = bc.top;
                var left = bc.left;
                var width = bc.width;
                var height = bc.height;
                window.scrollTo(0, 10000); //设置滚轮滚动到底部
                return [topX, left, width, height];
            });
            console.log('length', length);
            page.clipRect = {                     //截图的偏移和宽高
                top: length[0],
                left: length[1],
                width: length[2],
                height: length[3]
            };
        }, 6000);                 //设置延时时间，保证页面完全加载

        window.setTimeout(function () {
            page.render(output); // 渲染并保存图片到指定的路径
            phantom.exit(); // 确保 phantomjs 退出
        }, 6000);
    }
});