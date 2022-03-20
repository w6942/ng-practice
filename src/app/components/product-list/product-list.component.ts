import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

    products: Array<string> = [];

    constructor() {
    }

    ngOnInit(): void {
        console.log('init')
        for (let i = 0; i < 1000; i++) {
            this.products.push(`产品${i}`)
        }
    }

}
