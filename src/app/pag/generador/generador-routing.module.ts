import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneradorPage } from './generador.page';

const routes: Routes = [
  {
    path: '',
    component: GeneradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneradorPageRoutingModule {}
