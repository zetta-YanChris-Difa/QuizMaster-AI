import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideTranslocoScope, TranslocoModule } from '@jsverse/transloco';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { DashboardComponent } from './pages/dashboard.component';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderComponent,
    RouterLink,
    MatIconModule,
    MatTooltipModule,
    TranslocoModule,
  ],
  providers: [
    provideTranslocoScope({
      scope: 'dashboard',
      loader: {
        en: () => import('../../../assets/i18n/en/dashboard.json'),
        fr: () => import('../../../assets/i18n/fr/dashboard.json')
      }
    })
  ]
})
export class DashboardModule { }
