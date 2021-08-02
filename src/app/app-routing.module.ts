import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: "" , component: HomePageComponent },
  { path: "dashboard" , component: DashboardComponent },
  { path: "cards" , component: CardsComponent },
  { path: "charts" , component: ChartsComponent },
  { path: "products" , component: ProductsComponent },
  { path: "orders" , component: OrdersComponent },
  { path: "404" , component: FourOhFourComponent },
  { path: '**', redirectTo: '404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
