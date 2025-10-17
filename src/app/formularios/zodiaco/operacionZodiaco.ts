export class OperacionZodiaco {
    
    public nombre: string = '';
    public apellidoPat: string = ''; 
    public apellidoMat: string = '';
    public dia: number = 0;
    public mes: number = 0;
    public an: number = 0;           
    
    public edad: number = 0;
    public zodiacoSig: string = '';
    public imagenSigno: string = ''; 
    
    public buscarDat(): void {
        this.buscarEdad();
        this.resultadoSig();
    }

    

    private buscarEdad(): void {
    let fechaActual = new Date();
    this.edad = fechaActual.getFullYear() - this.an;

}

    
    private resultadoSig(): void {

        const signo: number = this.an % 12;
        
        this.zodiacoSig = 'Desconocido';
         
        switch (signo) {
            case 0: 
                this.zodiacoSig = "Mono"; 
                this.imagenSigno = "https://cdn.pixabay.com/photo/2018/03/14/05/42/monkey-3224416_1280.png";
                break;
            case 1: 
                this.zodiacoSig = "Gallo"; 
                this.imagenSigno = "https://cdn.pixabay.com/photo/2014/04/03/10/45/rooster-311361_1280.png";
                break;
            case 2: 
                this.zodiacoSig = "Perro"; 
                this.imagenSigno = "https://cdn.pixabay.com/photo/2019/09/22/04/54/dog-4495100_1280.png";
                break;
            case 3: 
                this.zodiacoSig = "Cerdo"; 
                this.imagenSigno = "https://cdn.pixabay.com/photo/2024/04/02/12/34/ai-generated-8670831_1280.png";
                break;
            case 4: 
                this.zodiacoSig = "Rata"; 
                this.imagenSigno = "https://cdn.pixabay.com/photo/2022/04/20/21/10/rat-7146207_1280.png";
                break;
            case 5: 
                this.zodiacoSig = "Buey"; 
                this.imagenSigno = "https://cdn.pixabay.com/photo/2014/04/02/16/15/oxen-306728_1280.png";
                break;
            case 6: 
                this.zodiacoSig = "Tigre"; 
                this.imagenSigno = "";
                break;
            case 7: 
                this.zodiacoSig = "Conejo"; 
                this.imagenSigno = "";
                break;
            case 8: 
                this.zodiacoSig = "Dragón"; 
                this.imagenSigno = "";
                break;
            case 9: 
                this.zodiacoSig = "Serpiente"; 
                this.imagenSigno = "";
                break;
            case 10: 
                this.zodiacoSig = "Caballo"; 
                this.imagenSigno = "https://cdn.pixabay.com/photo/2019/05/17/19/01/horse-4210394_1280.png";
                break;
            case 11: 
                this.zodiacoSig = "Cabra"; 
                this.imagenSigno = "https://cdn.pixabay.com/photo/2025/04/23/11/31/ai-generated-9552663_1280.png";
                break;
            default: 
                break;
        }
    }
}