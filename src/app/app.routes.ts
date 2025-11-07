import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ProjectWorkspaceComponent } from './pages/project-workspace/project-workspace.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'new',
    loadChildren: () => import('./features/new-project/new-project.module').then(m => m.NewProjectModule),
  },
  { path: 'project/:id', component: ProjectWorkspaceComponent },
  { path: '**', component: NotFoundComponent },
];
