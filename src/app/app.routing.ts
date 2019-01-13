import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { AuthGuard } from './guards/auth.guard';
import { UserResolver } from './user.resolver';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: './login/login.module#LoginModule', canActivate: [AuthGuard] },
    { path: 'home', loadChildren: './home/home.module#HomeModule', resolve: { data: UserResolver} }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);