class car {
    speed = 0;
    speedMax;
    acc;
    distance = 0;

    constructor(speedMax, acc, brake) {
        this.speedMax = speedMax;
        this.acc = acc;
        this.speed = this.speed;
        this.distance = this.distance;
        this.brake = brake;
    }

    accelerate() {
        this.speed = this.speed + this.acc;
        if (this.speedMax <= this.speed) { this.speed = this.speedMax }
        this.distance = this.distance + this.speed;
    }
    braking(){
        this.speed = this.speed - this.brake;

    }
}

class Circuito{
    name;
    recorrido = ['r','c','r','c','r'];
    
    constructor (name){
        this.name = name;
    }
}
class Race {
    
    recorrido = [new Circuito("papa")]
    distance;
    instant = 0;
    cars = [new car(200, 20,5), new car(220, 30,6)];
    results = [];

    constructor(distance, vueltas) {
        this.vueltas = vueltas;
        this.distance = distance;
    }

    start() {

        let timer = setInterval(() => {

            if (this.results.length === this.cars.length) clearInterval(timer);
        }, 1000);
        let vuelta = 1;
        while (vuelta < this.vueltas) {
            this.distance = this.distance * this.vueltas;
       
            this.instant++;
        this.recorrido.map((recorr) => {
            for (let i = 0; i < recorr.recorrido.length; i++) {
                
                
            this.cars.map((car)=>{
               
                while (car.distance !== this.distance) {
            
                
               
                    console.log('hol')
                switch (recorr.recorrido[i]) {
                case 'r':
                    car.accelerate();
                    console.log(car.distance)
                    if (car.speed === car.speedMax) {
                        car.speed = car.speedMax
                    }
                    
                    
                    break;
            
                case 'c':
                    if (car.speed < 0) {
                        car.speed = 0
                    }
                    car.braking();
                break;
            }
            if (car.distance == this.distance) {
                this.results.push({ instant: this.instant, car })
            }
        }   
        })

    
    }
    })
        vuelta++;
    }

    }
}


var race1 = new Race(162, 2);
race1.start();
console.log(race1.results)
console.log(`El ganador es:  ${race1.results}`)
    