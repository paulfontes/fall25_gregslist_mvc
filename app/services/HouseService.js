import { AppState } from "../AppState.js"
import { House } from "../models/House.js"



class HousesService {

    createHouse(data) {
        console.log('data in service', data)
        const newHouse = new House(data)
        AppState.houses.unshift(newHouse)
    }


    
    
    
    
    
    
    
    // createCar(data) {
        //     console.log('data in the service', data);
        //     const newCar = new Car(data) // converts raw data to class object
        
        //     // NOTE push will add an element to the end of an array. unshift will add an element t0 the beginning of an array
        //     AppState.cars.push(newCar) // triggers observer 👷‍♂️!
        
        //     console.log('cars after adding new car', AppState.cars);
        
        //     this.saveCars() // updates local storage 💾 
        //   }  
        
        
        
    }
    
    export const housesServices = new HousesService()



// const newHouse = new House(Data) {}