import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Multiplicacion } from './operacionesMulti';

@Component({
  selector: 'app-multiplicacion',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './multiplicacion.component.html',
  styleUrl: './multiplicacion.component.css'
})
export class MultiplicacionComponent {
  formulario!: FormGroup;
  resultado!: number;
  objmult=new Multiplicacion();

  constructor(){}
  
  ngOnInit(): void{  //¿para qué sirve? 
    this.formulario = new FormGroup({ //variables se definen aquí
      numero1: new FormControl(''),
      numero2: new FormControl(''),
    });
  }
   multNumeros(): void {
  
        this.objmult.numero1 = this.formulario.value.numero1; //valores del formulario se guardan en valores de mi clase
        this.objmult.numero2  = this.formulario.value.numero2;
        
        this.objmult.multiplicaNunm();
        
        this.resultado = this.objmult.resultado;
  }
}
