import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { registerRouting } from './register-routing.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    registerRouting,
    SharedModule,
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
