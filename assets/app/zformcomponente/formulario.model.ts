export class Formulario {
  fname: string;
  email: string;
  username: string;
  password: string;
  confirm: string;

  constructor(fname: string, email: string, password: string, username: string, confirm: string){
      this.fname= fname;
      this.email= email;
      this.password= password;
      this.username= username;
      this.confirm= confirm;
  }
}