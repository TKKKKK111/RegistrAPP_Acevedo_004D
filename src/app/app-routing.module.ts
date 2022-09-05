import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pag/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./pag/qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pag/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'docente',
    loadChildren: () => import('./pag/docente/docente.module').then( m => m.DocentePageModule)
  },
  {
    path: 'generador',
    loadChildren: () => import('./pag/generador/generador.module').then( m => m.GeneradorPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pag/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'contexto',
    loadChildren: () => import('./pag/contexto/contexto.module').then( m => m.ContextoPageModule)
  },
  {
    path: 'contexto',
    loadChildren: () => import('./pag/contexto/contexto.module').then( m => m.ContextoPageModule)
  },
  {
    path: 'cam',
    loadChildren: () => import('./pag/cam/cam.module').then( m => m.CamPageModule)
  },
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
