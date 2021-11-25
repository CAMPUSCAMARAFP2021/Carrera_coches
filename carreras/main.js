

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
class player extends car {

    constructor(name) {
        super()
        this.name = name;
    }
    chooseVehicle() {

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
    cars = [new car("Ferrari", 100, 10, 2), new car('Bmv', 100, 8, 5)];
    results = [];
    partialResults = [];


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
    
    seeresults() {
        this.results.map((results) => {
            var finalresults = document.createElement("h2");
            finalresults.innerHTML = results;
            document.body.appendChild(finalresults);
        })
    }
    
    start() {
        let timer = setInterval(() => {
            const distancia = this.distance * this.vueltas;
            this.instant++;
            this.cars.map(this.carController.bind(this))

            this.cars.map((car) => {

                if (car.distance >= distancia) {
                    if (this.results.includes(car.name) === false) {
                        this.results.push(car.name)
                    }

                    if (this.cars.length === this.results.length) {
                        console.log('carrera terminada')

                        clearInterval(timer);
                    }




                }
            })

        }, 100);

    }


}


var race1 = new Race(200, 2);



