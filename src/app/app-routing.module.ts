import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: "" , component: HomePageComponent },
  { path: "dashboard" , component: DashboardComponent },
  { path: "cards" , component: CardsComponent },
  { path: "charts" , component: ChartsComponent },
  { path: "orders" , component: OrdersComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
