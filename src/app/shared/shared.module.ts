import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,ReactiveFormsModule
  ],
  declarations: [MainLayoutComponent, HeaderComponent, FooterComponent],
  exports: [
    CustomMaterialModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class SharedModule { }
