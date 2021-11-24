class car {
    speed = 0;
    speedMax;
    acc;
    distance = 0;
    gasoil = Math.floor((Math.random() * 10) + 1);
    

    constructor(name, speedMax, acc, brake) {
        this.name = name;
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
      
        this.gasoil = this.gasoil - 10;
       
        if (this.gasoil < 30) {
            this.repost()
        }
    }

    repost() {
        this.instant++;
        this.gasoil = 100;
        this.speed = 0;
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
    recorrido = ['r', 'c', 'r', 'c', 'r', 'c', 'r'];

    constructor(name) {
        this.name = name;
    }
    getStetch(distance) {
        return this.recorrido[distance % 100 - distance % 100 % this.recorrido.length]
    }
}
class Race {

    circuito = new Circuito("papa")
    distance;
    instant = 0;
    cars = [new car("Ferrari", 100, 7, 2), new car('Bmv', 100, 8, 5)];
    results = [];

    constructor(distance, vueltas) {
        this.vueltas = vueltas;
        this.distance = distance;
    }



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


                if (car.distance >= distancia) {
                    this.results.push(car.name)


                    console.log(`El ganador es: ${this.results} con un tiempo de ${this.instant}s`)
                    console.log(this.results)
                    clearInterval(timer);
                }
            })

        }, 10);

    }
}


var race1 = new Race(1000, 5);
race1.start();


