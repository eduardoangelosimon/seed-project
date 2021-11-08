import { Component, Input } from '@angular/core';
import { Empregado } from './empregado.model';

@Component({
    selector: 'emp-app',
    template:`
        <br/> {{emp.name}} - {{emp.age}}
    `,
})

export class EmpregadoComponent {
    @Input() emp: Empregado;
}