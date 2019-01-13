import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home/home.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      pageTitle: 'Home'
    }
  }
];
export const homeRouting: ModuleWithProviders = RouterModule.forChild(routes);
