import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'products',
        loadChildren: () => import('./components/product-list/product-list.module').then(m => m.ProductListModule)
    },
    {
        path: 'products/:id',
        loadChildren: () => import('./components/product-detail/product-detail.module').then(m => m.ProductDetailModule)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
