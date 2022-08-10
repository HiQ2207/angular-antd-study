import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-antd-upload',
  templateUrl: './antd-upload.component.html',
  styleUrls: ['./antd-upload.component.css']
})
export class AntdUploadComponent implements OnInit {
  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };
  fileList = [
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ];
  previewImage: string | undefined = '';
  previewVisible = false;

  constructor() { }

  ngOnInit() {
  }

  handlePreview = (file) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };

}
