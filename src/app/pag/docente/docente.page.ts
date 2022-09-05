import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  docente={


    docenteid:'',
    password:''

  }
  onSubmit(){

    console.log('submit');
    console.log(this.docente);
  }
}
