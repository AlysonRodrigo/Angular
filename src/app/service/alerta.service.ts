import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertaComponent } from '../alerta/alerta.component';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor(
    private bsModalService: BsModalService
  ) { }
  private showAlert(message: string, type: string){
    const bsModalResf: BsModalRef = this.bsModalService.show(AlertaComponent)
    bsModalResf.content.type = type
    bsModalResf.content.message = message
  }
  showAlertDanger(message: string){
    this.showAlert(message, 'danger')
  }

  showAlertSucess(message: string){
    this.showAlert(message, 'sucess')
  }

  showAlertInfo(message: string){
    this.showAlert(message, 'info')
  }
}
