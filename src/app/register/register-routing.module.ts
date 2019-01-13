import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  path: '',
  component: RegisterComponent,
  data: {
    pageTitle: 'Register'
  }
}];

export const registerRouting: ModuleWithProviders = RouterModule.forChild(routes);
