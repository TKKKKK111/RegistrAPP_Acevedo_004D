import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContextoPageRoutingModule } from './contexto-routing.module';

import { ContextoPage } from './contexto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContextoPageRoutingModule
  ],
  declarations: [ContextoPage]
})
export class ContextoPageModule {}
