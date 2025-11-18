import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  persona = {

    nombre: '',
    apellido: '',
    email: ''
  }
  
  procesarInformacion(){

    console.log(this.persona)
  }
}
