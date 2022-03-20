import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit {

    product$!: Observable<string>;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.product$ = this.activatedRoute.paramMap.pipe(
            map(paramMap => `产品${paramMap.get('id')}`)
        );
    }

}
