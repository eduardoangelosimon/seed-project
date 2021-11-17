import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from "@angular/forms";
import { User } from "./user.model"
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx'
import { Observable } from "rxjs";

@Component({
  selector: 'app-user-save',
  templateUrl: './user-component.html'
})
export class UserComponentSave implements OnInit {
  myForm : FormGroup;

  constructor(private http: Http) {}

  ngOnInit(){
    this.myForm = new FormGroup({
      firstName: new FormGroup(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
}

addUser(user: User) {
  const bodyReq = JSON.stringify(user);
  const myHeaders = new Headers({'Content-Type': 'application/json'});

  return this.http.post('http://localhost:3000/user', bodyReq, {headers: myHeaders})
    .map( (responseRecebido: Response) => {
      const aux = responseRecebido.json();
      const newObjUser = new User(aux.objUserSave.firstNameSch,
                                  aux.objUserSave.lastNameSch,
                                  aux.objUserSave.emailNameSch,
                                  aux.objUserSave.passwordSch);
      return newObjUser;
    })
    .catch( (errorRecebido: Response) => Observable.throw(errorRecebido.json()) );
}

onSubmit(){
  let user = new User(
    this.myForm.value.firstName,
    this.myForm.value.lastName,
    this.myForm.value.email,
    this.myForm.value.password
    )
  console.log("Indo: " + JSON.stringify(user));
  this.addUser(user)
    .subscribe(
      (dadosSucesso)=>console.log("Voltando: " + JSON.stringify(dadosSucesso)),
      (dadosErro)=>console.log(dadosErro)
    );
  this.myForm.reset();
}

function addUser(_user: any, User: typeof User) {
  throw new Error("Function not implemented.");
}
