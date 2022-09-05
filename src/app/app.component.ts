import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes: Componente[] = [ 
    {
      icon: 'Home',
      name: 'Información',
      redirecTo: '/contexto',
    },

    {
      icon: 'qr-code-outline',
      name: 'QR',
      redirecTo:'/qr',
    
    },
    {
      icon: 'exit-outline',
      name: 'Logout',
      redirecTo:'/logout',
    
    },
    {
      icon: 'aperture-outline',
      name: 'Escanear QR',
      redirecTo:'/contexto'
      
    
    },
   
 
  ];



  
  
  
  constructor() {}
}
