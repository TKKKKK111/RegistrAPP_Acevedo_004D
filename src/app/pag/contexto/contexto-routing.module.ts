import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContextoPage } from './contexto.page';

const routes: Routes = [
  {
    path: '',
    component: ContextoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContextoPageRoutingModule {}
