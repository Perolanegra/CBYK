import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { inject } from '@angular/core';
import { RequestService } from '../../services/request.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: {
      onGoingDeliveries: () => inject(RequestService).getOnGoingDeliveries(),
      unsuccessfulDeliveries: () =>
        inject(RequestService).getUnsuccessfulDeliveries(),
      deliveriesByHood: () => inject(RequestService).getDeliveriesByHood(),
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class DashboardRoutingModule {}
