/* export class Formulario {
  constructor(
    public name:string,
    public email:string,
    public username:string,
    public password:string,
    public confirmPassword:string,
    ){
  }
} */

import { Component } from "@angular/core";

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styles:[`
    body, html{
        height: 100%;
        background-repeat: no-repeat;
        background-color: #d3d3d3;
        font-family: 'Oxygen', sans-serif;
    }
    .main{
        margin-top: 70px;
    }
    
    h1.title { 
       font-size: 50px;
       font-family: 'Passion One', cursive; 
       font-weight: 400; 
    }
    
    hr{
       width: 10%;
       color: #fff;
    }
    
    .form-group{
       margin-bottom: 15px;
    }
    
    label{
       margin-bottom: 15px;
    }
    
    input,
    input::-webkit-input-placeholder {
       font-size: 11px;
       padding-top: 3px;
    }
    
    .main-login{
        background-color: #fff;
       /* shadows and rounded borders */
       -moz-border-radius: 2px;
       -webkit-border-radius: 2px;
       border-radius: 2px;
       -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
       -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
       box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    
    }
    
    .main-center{
        margin-top: 30px;
        margin: 0 auto;
        max-width: 330px;
       padding: 40px 40px;
    
    }
    
    .login-button{
       margin-top: 5px;
    }
    
    .login-register{
       font-size: 11px;
       text-align: center;
    }
`]
})
export class Formulario {
   formulario = {
      fname: '',
      email:'',
      username:'',
      password:'',
      confirm:'',
  }
}