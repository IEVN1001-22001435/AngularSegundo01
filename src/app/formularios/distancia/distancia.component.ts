import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OperacionDistancias } from './operacionDistancia';

@Component({
  selector: 'app-distancia',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  formulario!: FormGroup;
  resultado!: number;
  objdistanciatotal= new OperacionDistancias();

  constructor() {}
  
  ngOnInit(): void { 
    this.formulario = new FormGroup({ 
      x1: new FormControl(''),
      x2: new FormControl(''),
      y1: new FormControl(''),
      y2: new FormControl(''),
    });
  }
  calcularDistancias(): void {
    const values = this.formulario.value;
    this.resultado = this.objdistanciatotal.calcularDistancias(
      values.x1,
      values.x2,
      values.y1,
      values.y2
    );
  }
}

