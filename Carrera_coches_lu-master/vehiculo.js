class vehiculo {

    constructor (speed, speed_max, acceleration, braking){
        this.speed = speed;
        this.speed_max = speed_max;
        this.acceleration = acceleration;
        this.braking = braking;
    }

    acelerate (){

    }

    brake(){

    }
}
class coche extends vehiculo{
    constructor(name, combustible, speed, speed_max, acceleration, braking) {
        super(speed,speed_max, acceleration,braking); 
        this.name = name;
        this.combustible = combustible;
        }
}

coche.prototype.toString = function perroToString() {
    var retorno =  `La descripcion del coche es:` + "\n marca:"+ this.brand + "\n año " +this.adge;
    return retorno;
  }

  car1 = new coche("ferrary", 100)
  
console.log(car1.toString());

class pilotos{

    constructor (nombre, vehiculo){
        this.nombre = nombre;
        this.vehiculo = vehiculo;

    }
    elegircoche(){

    }

    repostar(){

    }
    entrarEnboxes(){
        
    }

    
}

class circuito {

    vueltas = 0;
    constructor(name, recorrido = []) {
        this.name = name;
        this.recorrido = recorrido
    }

   
}
circ1 = new circuito( "Miami",["recto", "recto", "curva", "recto", "final"]  );
console.log(circ1.recorrido);

