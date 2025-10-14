export class Multiplicacion{
 
 public numero1:number =0;
 public numero2:number=0;
 public resultado:number=0;
 
 
   multiplicaNunm():void{
   
    this.resultado= 0;
    let veces: number = this.numero1;
    let numeroSumar: number = this.numero2;
   
 
    for (let i = 0; i < veces; i++) {
           
        this.resultado += numeroSumar;
    }
 
   }
}