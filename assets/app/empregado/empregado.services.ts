import { Empregado } from "./empregado.model";

export class EmpregadoService {
  private empregadoSService: Empregado[] = [];

  constructor() {
    this.empregadoSService.push(new Empregado('Victor Service', 202));
    this.empregadoSService.push(new Empregado('Gabriela Sevice', 222));
    this.empregadoSService.push(new Empregado('Isis Service', 302));
  }

  getEmpregados() {
    return this.empregadoSService;
  }

  addEmpregados(objEmpregado: Empregado){
    this.empregadoSService.push(objEmpregado);
  }
}