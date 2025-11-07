import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { IndexComponent } from './pages/index/index.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';
import { ProjectWorkspaceComponent } from './pages/project-workspace/project-workspace.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    IndexComponent,
    NewProjectComponent,
    ProjectWorkspaceComponent,
    NotFoundComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    // Register custom SVG icons
    this.matIconRegistry.addSvgIcon(
      'sparkles',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons-packs/custom-icons/sparkles.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'search',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons-packs/custom-icons/search.svg')
    );
  }
}
