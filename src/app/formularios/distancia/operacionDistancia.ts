
export class OperacionDistancias {
    
   public resultado: number=0;

    
    calcularDistancias(x1: number, x2: number, y1: number, y2: number): number {
        
        let numx1 = Number(x1);
        let numx2 = Number(x2);
        let numy1 = Number(y1);
        let numy2 = Number(y2);

        
        let disX = numx2 - numx1;
        let disY = numy2 - numy1;
        
        let cuadradoX = disX * disX;
        let cuadradoY = disY * disY;

        let distanciatotal = cuadradoX + cuadradoY;

        this.resultado = Math.sqrt(distanciatotal);
        
        return this.resultado;
    }
}