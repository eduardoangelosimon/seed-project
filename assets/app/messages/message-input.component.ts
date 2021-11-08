import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Message } from "./message.model";
import { MessageService } from "./message.services";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    providers:[MessageService]
})

export class MessageInputComponent{
    constructor (private messageService: MessageService){ }

    onSave(textoConsole: string){
        const messageAux = new Message(textoConsole, 'Eduardo');
        this.messageService.addMessage(messageAux);
        console.log(textoConsole)
    }

    onSubmit(form: NgForm){
        const messageAux = new Message(form.value.myContentngForm, 'Eduardo');
        this.messageService.addMessage(messageAux);
        console.log(form);
        form.resetForm();
    }
}