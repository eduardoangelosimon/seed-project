import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector:'app-formDrivenAtivExercicio',
    templateUrl:'./formularioDrivenAtiv.component.html'
})

export class FormularioDrivenAtivComponent{
    nome:string;
    email: string;
    username:string;

    onSubmit(form: NgForm){
        this.nome = form.value.myContentngDrivenAtivFormNome;
        this.email = form.value.myContentngDrivenAtivFormEmail;
    
        console.log(this.nome);
        console.log(this.email);
        
        console.log(form.value.myContentngDrivenAtivFormUsername);
        console.log(this.username);

        console.log(form);
    }
}