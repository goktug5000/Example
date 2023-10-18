import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule, matDialogAnimations} from '@angular/material/dialog';
import {MatButtonModule}from '@angular/material/button';
import { PopUpComponent } from './pop-up/pop-up.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [

    ProductComponent,
     PopUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
