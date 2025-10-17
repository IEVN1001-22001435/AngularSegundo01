import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { OperacionZodiaco } from './operacionZodiaco';


@Component({
  selector: 'app-zodiaco',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent {
  formulario!: FormGroup;
  objzodiaco = new OperacionZodiaco();
  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apellidoPat: new FormControl(''), 
      apellidoMat: new FormControl(''), 
      dia: new FormControl(''),
      mes: new FormControl(''),
      an: new FormControl(''), 
      sexo: new FormControl(''),
    });
  }

  imprimirHoroscopo(): void {
    

    const datosFormulario = this.formulario.value;
    
  
    this.objzodiaco.nombre = datosFormulario.nombre;
    this.objzodiaco.apellidoPat = datosFormulario.apellidoPat;
    this.objzodiaco.apellidoMat = datosFormulario.apellidoMat;
    this.objzodiaco.dia = Number(datosFormulario.dia);
    this.objzodiaco.mes = Number(datosFormulario.mes);
    this.objzodiaco.an = Number(datosFormulario.an); 
    
    this.objzodiaco.buscarDat();
  }
}