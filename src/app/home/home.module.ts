import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { homeRouting } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {SharedModule} from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    homeRouting,
    SharedModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
