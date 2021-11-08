import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AppComponent } from "../app.component";
import { Message } from "./message.model";

@Component({
    selector: 'app-messages',
    template:`
      <div class="row">
        <strong class="col-md-8 col-md-offset-2">Após Reestruturação</strong>
        <app-message-input></app-message-input>
      </div>
      <hr/>
      <div class="row">
        <app-message-list></app-message-list>
        <strong class="col-md-8 col-md-offset-2">Após Reestruturação</strong>
      </div>
    `,
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
export class MessagesComponent {

    color ='yellow';
    tam = 12;
    onMudaStyle(){
      this.color = 'red';
      this.tam = 16;
    }

    @Input() messageVarClasse : Message = new Message("","");
    @Input('inputMessage') messageVarClasseAlias : Message = new Message("","");

    @Output() editClicked_MessageMetodoClasse = new EventEmitter<string>();
    @Output('outputMessage') editClicked_MessageMetodoClasseAlias = new EventEmitter<string>();

    onEdit(){
    // alert('Ta funcionando')
        this.editClicked_MessageMetodoClasse.emit("Texto veio de message (child) para o app (pai)");
        this.editClicked_MessageMetodoClasseAlias.emit("Texto veio de message (child) para o app (pai) - Alias");
    }
}