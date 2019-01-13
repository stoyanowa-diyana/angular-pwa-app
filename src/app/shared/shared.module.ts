import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import { MainLayoutModule } from './layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MainLayoutModule
  ],
  declarations: [],
  exports: [
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MainLayoutModule,
  ]
})
export class SharedModule { }
