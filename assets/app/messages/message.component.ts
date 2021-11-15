import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AppComponent } from "../app.component";
import { Message } from "./message.model";
import { MessageService } from "./message.services";

@Component({
    selector: 'app-message',
    templateUrl:'./message.component.html',
    styles:[`
    .author{
        display: inline-block;
        font-style: italic;
        font-size: 12px;
        width: 80%;
    }
    .autor{
        display: inline-block;
        font-style: normal;
        font-size: 12px;
        width: 80%;
    }
    .config{
        display: inline-block;
        text-align: right;
        font-size: 12px;
        width: 19%;
    }
`]
})
export class MessageComponent {

    color ='yellow';
    tam = 12;
    onMudaStyle(){
      this.color = 'red';
      this.tam = 16;
    }

    @Input() messageVarClasse : Message = new Message("","");
    @Input('inputMessage') messageVarClasseAlias : Message = new Message("","");

    constructor(private messageServiceObj: MessageService) {}
    onDelete(){
        this.messageServiceObj.deleteMessage(this.messageVarClasse);
    }

    @Output() editClicked_MessageMetodoClasse = new EventEmitter<string>();
    @Output('outputMessage') editClicked_MessageMetodoClasseAlias = new EventEmitter<string>();

    onEdit(){
    // alert('Ta funcionando')
        this.editClicked_MessageMetodoClasse.emit("Texto veio de message (child) para o app (pai)");
        this.editClicked_MessageMetodoClasseAlias.emit("Texto veio de message (child) para o app (pai) - Alias");
    }
}