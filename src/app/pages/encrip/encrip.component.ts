// encrip.component.ts
import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AesService } from 'src/app/services/aes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-encrip',
  templateUrl: './encrip.component.html',
  styleUrls: ['./encrip.component.scss']
})

export class EncripComponent {

  texto: any;
  resultado: any;
  resultadoDes: any;
  clave: any;
  metodoEncriptacion: string = '';
  encryptedData = { encrypted_text: [] };

  constructor(private aesService: AesService) {

  }



  encriptar() {
    // Verifica que tengas datos antes de llamar al servicio
    if (this.texto && this.clave) {
      this.aesService.encryptText(this.texto, this.clave).subscribe(
        response => {
          this.resultado = response.encrypted_text;
          this.resultadoDes = response.decoded_text
          console.log(response)
        },
        error => {
          console.error('Error al encriptar:', error);
        }
      );
    } else {
      console.error('Por favor, ingresa texto y clave para encriptar.');
    }
  }



  // Función para manejar el cambio en el mat-select
  onMetodoEncriptacionChange(event: MatSelectChange): void {
    this.metodoEncriptacion = event.value;
  }



}
