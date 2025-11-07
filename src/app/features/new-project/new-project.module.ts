import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { provideTranslocoScope, TranslocoModule } from '@jsverse/transloco';

import { NewProjectRoutingModule } from './new-project-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { NewProjectComponent } from './pages/new-project.component';


@NgModule({
  declarations: [NewProjectComponent],
  imports: [
    CommonModule,
    FormsModule,
    NewProjectRoutingModule,
    HeaderComponent,
    RouterLink,
    TranslocoModule,
  ],
  providers: [
    provideTranslocoScope({
      scope: 'new-project',
      loader: {
        en: () => import('../../../assets/i18n/en/new-project.json'),
        fr: () => import('../../../assets/i18n/fr/new-project.json')
      }
    })
  ]
})
export class NewProjectModule { }
