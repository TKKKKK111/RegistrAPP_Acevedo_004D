import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneradorPageRoutingModule } from './generador-routing.module';

import { GeneradorPage } from './generador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneradorPageRoutingModule
  ],
  declarations: [GeneradorPage]
})
export class GeneradorPageModule {}
