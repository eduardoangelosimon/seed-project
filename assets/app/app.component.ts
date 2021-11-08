import { Component } from '@angular/core';
import { style } from '@angular/core/src/animation/dsl';
import { Message } from './messages/message.model';
import { Person } from './person/person.model';
import { Formulario } from './zformcomponente/formulario.component';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',

})
export class AppComponent {
    messageBinding: Message = new Message("Texto da Mensagem", "ViniciusRosalen");
    messageBindingAlias: Message = new Message("Texto da Mensagem Alias", "ViniciusRosalenAlias");
}