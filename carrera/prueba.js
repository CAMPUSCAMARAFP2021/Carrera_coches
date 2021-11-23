while (vuelta < this.vueltas) {
            
    let i = 0;

     this.cars.map((car) => {
         car.accelerate();
         this.distance = this.distance * this.vueltas;
        
         while (car.distance !== this.distance) {
             this.instant++;
             this.recorrido.map((recorr) => {
                 
                 while (i < recorr.recorrido.length) {
                    
                     if (recorr.recorrido[i] === 'r') {
                         if (car.speed === car.speedMax) {
                             car.speed = car.speedMax
                         }
                         console.log(car.speed)
                         
                     } 
                     if (recorr.recorrido[i] === 'c') {
                         console.log()
                     }
                    
                 }
                 
             })
           
             vuelta++;

             if (car.distance == this.distance) {

                 this.results.push({ instant: this.instant, car })

             }
         }
     })
     

 }

