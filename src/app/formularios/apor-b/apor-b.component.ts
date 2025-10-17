import { Component, OnInit } from '@angular/core'; // Importar OnInit
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'; // Importar clases de formularios
import { AporB } from './operacionAporB'; // Asumo que cambiaste el nombre del archivo/clase de lógica. Si no, usa './operacionesMulti'

@Component({
  selector: 'app-apor-b', // Nuevo selector
  // Debes importar ReactiveFormsModule para usar FormGroup y FormControl
  imports: [ReactiveFormsModule], 
  templateUrl: './apor-b.component.html',
  styleUrl: './apor-b.component.css'
})
// Implementar OnInit para usar el ciclo de vida ngOnInit
export class AporBComponent implements OnInit { 

  formulario!: FormGroup;
  resultado!: number;
  // Usar la nueva clase de lógica
  objmult = new AporB(); 

  constructor() { }

  // Asegúrate de que ngOnInit exista, ya que lo usas.
  ngOnInit(): void {
    // Definición del FormGroup para el formulario
    this.formulario = new FormGroup({
      numero1: new FormControl(''),
      numero2: new FormControl(''),
    });
  }
  
  // Función para realizar la multiplicación.
  multNumeros(): void {
    // Asignar valores del formulario al objeto de lógica
    this.objmult.numero1 = this.formulario.value.numero1; 
    this.objmult.numero2 = this.formulario.value.numero2;
    
    // Asumo que tu clase 'AporB' aún tiene el método 'multiplicaNunm()'
    this.objmult.multiplicaNunm(); 
    
    this.resultado = this.objmult.resultado;
  }
}