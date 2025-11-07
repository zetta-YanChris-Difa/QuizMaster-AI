import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { DashboardComponent } from './pages/dashboard.component';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderComponent,
    RouterLink,
    MatIconModule,
  ]
})
export class DashboardModule { }
