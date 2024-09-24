import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { RequestService } from '../../services/request.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    TableComponent
  ],
  exports: [],
  providers: [
    RequestService,
  ]
})
export class DashboardModule {}
