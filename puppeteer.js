const puppeteer = require('puppeteer');
 
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ // 设置视窗大小
    width: 600,
    height: 800
    });
    await page.goto('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=%E4%B8%80%E4%B8%AA%E7%94%A8screenshot-test%E7%BC%96%E5%86%99%E7%9A%84%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6&fenlei=256&oq=%25E4%25B8%2580%25E4%25B8%25AA%25E7%2594%25A8react-screenshot-test%25E7%25BC%2596%25E5%2586%2599%25E7%259A%2584%25E5%25B1%258F%25E5%25B9%2595%25E6%2588%25AA%25E5%259B%25BE%25E6%25B5%258B%25E8%25AF%2595%25E7%25BB%2584%25E4%25BB%25B6&rsv_pq=ea3a1e0c000a8797&rsv_t=a45akGJ7JTIHkz%2BQpH11FM5kuKoEL%2Fs6VpJSXl7ly%2Fcvn%2BRZD7ZVcXlpTbM&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&inputT=1217&rsv_sug3=5&rsv_sug2=0&rsv_sug4=67361'); // 打开页面
    await page.screenshot({path: 'example.png'}); // path: 截屏文件保存路径
 
    await browser.close();
})();