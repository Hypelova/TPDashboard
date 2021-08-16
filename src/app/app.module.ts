import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ChartsComponent } from './charts/charts.component';
import { CardsComponent } from './cards/cards.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { ChartModule } from 'angular2-chartjs';


@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    HeaderComponent,
    DashboardComponent,
    HomePageComponent,
    ChartsComponent,
    CardsComponent,
    OrdersComponent,
    ProductsComponent,
    FourOhFourComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
