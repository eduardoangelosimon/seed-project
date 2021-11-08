import { Component } from '@angular/core';
import { Empregado } from './empregado/empregado.model';
import { EmpregadoService } from './empregado/empregado.services';
import { Message } from './messages/message.model';
import { MessageService } from './messages/message.services';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService, EmpregadoService],
    styles:[`
        .author{
            display: inline-block;
            font-style: italic;
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
export class AppComponent {

    messageS: Message[] = [ new Message("Texto 1 da Mensagem", "EduardoSimon"),
                            new Message("Texto 2 da Mensagem", "EduardoSimon"),
                            new Message("Texto 3 da Mensagem", "EduardoSimon")]

    constructor (private empregadoService: EmpregadoService){ }
    objEmpregado: Empregado = new Empregado("", 0);
    onEmpregadoServiceSave(){
        this.empregadoService.addEmpregados(this.objEmpregado);
        this.objEmpregado = new Empregado("", 0);
    }

    empregadoS = [
        new Empregado("Eduardo", 19),
        new Empregado("Larissa", 20),
        new Empregado("Vitor", 35),
    ]

    mostrarElemento: boolean = true;
    onMudaMostrarElemento(){
        this.mostrarElemento = !this.mostrarElemento;
    }
}