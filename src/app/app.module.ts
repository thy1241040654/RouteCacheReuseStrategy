import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRouterModule } from './appRouter.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HomeComponent } from './view/home/home.component';
import { CustomerComponent } from './view/customer/customer.component';
import { CustomerSearchComponent } from './view/customerSearch/customerSearch.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    CustomerComponent,
    CustomerSearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRouterModule
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
