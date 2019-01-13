import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { AuthGuard } from './guards/auth.guard';
import { UserResolver } from './user.resolver';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';

export const routes: Routes = [
   { path: '',
     component: MainLayoutComponent,
     children: [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'login', loadChildren: './login/login.module#LoginModule', canActivate: [AuthGuard] },
        { path: 'register', loadChildren: './register/register.module#RegisterModule', canActivate: [AuthGuard] },
        { path: 'home', loadChildren: './home/home.module#HomeModule', resolve: { data: UserResolver} }
    ]}
    
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);