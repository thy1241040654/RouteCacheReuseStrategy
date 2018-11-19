import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';

import { RouteCacheReuseStrategy } from './app.reuseStrategy';
import { TabNavService } from './service/tabNav.service';

import { HomeComponent } from './view/home/home.component';
import { CustomerComponent } from './view/customer/customer.component';
import { CustomerSearchComponent } from './view/customerSearch/customerSearch.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, data: { 'title': '首页', 'canClose': false } },
    { path: 'customer/:id', component: CustomerComponent, data: { 'title': '客户详情', 'canClose': true } },
    { path: 'customersearch', component: CustomerSearchComponent, data: { 'title': '客户查询', 'canClose': true } },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
    providers: [
        { provide: RouteReuseStrategy, useClass: RouteCacheReuseStrategy },
        TabNavService
    ]
})
export class AppRouterModule { }
