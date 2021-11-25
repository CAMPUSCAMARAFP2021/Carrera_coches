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
    //Poner velocidad max
    accelerate() {
        this.speed = this.speed + this.acc;
        if (this.speedMax <= this.speed) { this.speed = this.speedMax }
        this.distance = this.distance + this.speed;
        if (this.speed === this.speedMax) {
            this.speed = this.speedMax
        }
    }
    braking() {
        this.speed = this.speed - this.brake;
        if (this.speed < 0) {
            this.speed = 0
        }
    }
}

class Circuito {
    name;
    recorrido = ['r', 'c', 'r', 'c', 'r'];

    constructor(name) {
        this.name = name;
    }
    getStetch(distance){
        return this.recorrido[distance%100 - distance%100 %this.recorrido.length]
    }
}
class Race {

    circuito = new Circuito("papa")
    distance;
    instant = 0;
    cars = [new car(200, 20, 5), new car(220, 30, 6)];
    results = [];

    constructor (distance, vueltas) {
        this.vueltas = vueltas;
        this.distance = distance;
    }

    carController(car){
        const stetch = this.circuito.getStetch(car.distance);
        stetch === 'c' ? car.braking() : car.accelerate();
        if (car.distance === this.distance) {
            this.results.push(this.instant, this.cars )
            console.log(this.results)
        }
    }
    
    start() {

        let timer = setInterval(() => {
            this.instant++;
            this.cars.map(this.carController.bind(this))
           
            
            
            if (this.results.length === this.cars.length) clearInterval(timer);
        }, 500);
    }
        
}


var race1 = new Race(162, 2);
race1.start();
console.log(race1.results)
console.log(`El ganador es:  ${race1.results}`)
