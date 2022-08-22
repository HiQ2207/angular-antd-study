import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { NzTableComponent } from 'ng-zorro-antd';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
    selector: 'app-rollingload-view',
    templateUrl: './rollingload-view.component.html',
    styleUrls: ['./rollingload-view.component.css']
})
export class RollingloadViewComponent implements OnInit {
    @ViewChild('virtualTable') nzTableComponent: NzTableComponent;
    listOfData: any[] = [];

    mapOfExpandData: { [key: string]: boolean } = {};

    private destroy$ = new Subject();

    constructor(
        private httpAxios: HttpserviceService
    ) { }

    ngOnInit() {
      this.getTableData();
    }

    scrollToIndex(index: number): void {
        this.nzTableComponent.cdkVirtualScrollViewport.scrollToIndex(index);
    }

    async getTableData() {
        const api: any = '../../../assets/data/customdata.json';
        let result: any;
        result = await this.httpAxios.axiosGet(api);
        this.listOfData = result.data.result;
        for (let i = 0; i < 10; i++) {
            this.listOfData = this.listOfData.concat(this.listOfData);
        }
    }

    // tslint:disable-next-line: use-life-cycle-interface
    ngAfterViewInit(): void {
        this.nzTableComponent.cdkVirtualScrollViewport.scrolledIndexChange
          .pipe(takeUntil(this.destroy$))
          .subscribe(data => {
            console.log('scroll index to', data);
          });
    }

    // tslint:disable-next-line: use-life-cycle-interface
    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

}
