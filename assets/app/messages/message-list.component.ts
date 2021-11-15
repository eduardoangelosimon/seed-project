import { Component, OnInit } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.services";

@Component({
    selector: 'app-message-list',
    templateUrl:"./message-list.component.html",
   /*  providers: [MessageService] */
})
export class MessageListComponent implements OnInit {
    messageS: Message[] = 
    [ 
      new Message("Texto 1 da Mensagem-LIST-Comp","EduardoSimon-LIST-Comp"),
      new Message("Texto 2 da Mensagem-LIST-Comp","AngeloSimon-LIST-Comp"),
      new Message("Texto 3 da Mensagem-LIST-Comp","SimonEduardo-LIST-Comp"),
    ];
    
    constructor (private messageService: MessageService){ }

    ngOnInit(): void{
      // messageS aponta para o array messageSService
      // que armazena os dados
      this.messageS = this.messageService.getMessages();
      // console.log("!!!!")
    }
}

