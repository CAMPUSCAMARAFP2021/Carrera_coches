class cars extends vehiculo {

   
    constructor(name,  ) {
    super() 
    }
    

    acelerar() {
        this.speed += this.acceleration;
    }

    frenar() {
        this.speed = this.speed - this.brake
        return "la velocidad ha disminuido"
    }

    repostar() {
        this.fuel = this.fuel + (100 - this.fuel);
        this.velocidad = 0;
    }
    
    
}

cars.prototype.toString = function perroToString() {
    var retorno =  `La descripcion del coche es:` + "\n marca:"+ this.brand + "\n año " +this.adge;
    return retorno;
  }
  
console.log(car1.toString());
console.log(car2.toString());
console.log(car3.toString());