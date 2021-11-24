class car {
    speed = 0;
    speedMax;
    acc;
    distance = 0;

<<<<<<< HEAD
    constructor(name,speedMax, acc, brake) {
       this.name = name;
=======
    constructor(speedMax, acc, brake) {
>>>>>>> cfb86813a1443d01017cd5a48b4d63a85e053b0e
        this.speedMax = speedMax;
        this.acc = acc;
        this.speed = this.speed;
        this.distance = this.distance;
        this.brake = brake;
<<<<<<< HEAD
        
    }
    
=======
    }
>>>>>>> cfb86813a1443d01017cd5a48b4d63a85e053b0e
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
<<<<<<< HEAD
    getStetch(distance) {
        return this.recorrido [distance % 100 - distance % 100 % this.recorrido.length]
=======
    getStetch(distance){
        return this.recorrido[distance%100 - distance%100 %this.recorrido.length]
>>>>>>> cfb86813a1443d01017cd5a48b4d63a85e053b0e
    }
}
class Race {

    circuito = new Circuito("papa")
    distance;
    instant = 0;
<<<<<<< HEAD
    cars = [new car("Ferrari",200, 5, 5), new car('Bmv',500, 50, 2)];
    results = [];

    constructor(distance, vueltas) {
=======
    cars = [new car(200, 20, 5), new car(220, 30, 6)];
    results = [];

    constructor (distance, vueltas) {
>>>>>>> cfb86813a1443d01017cd5a48b4d63a85e053b0e
        this.vueltas = vueltas;
        this.distance = distance;
    }

<<<<<<< HEAD
    carController(car) {
        const stetch = this.circuito.getStetch(car.distance);
        stetch === 'r' ? car.accelerate() : car.accelerate();
       
        
    }

    getwinner(car) {
        this.results.push(car)
      }

    start() {
        let timer = setInterval(() => {
            const distancia = this.distance * this.vueltas;
            this.instant++;
            this.cars.map(this.carController.bind(this))
            this.cars.map((car) => {
           
            if (car.distance >= distancia){
                this.results.push(car.name)
                console.log(this.results)
                 clearInterval(timer);
            }
        }
            )
        }, 1000);
        
    }
}


var race1 = new Race(100, 3);
=======
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
>>>>>>> cfb86813a1443d01017cd5a48b4d63a85e053b0e
race1.start();
console.log(race1.results)
console.log(`El ganador es:  ${race1.results}`)
