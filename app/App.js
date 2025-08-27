import { CarsController } from './controllers/CarsController.js';
import { ExampleController } from './controllers/ExampleController.js';
import { HouseController } from './controllers/HouseController.js';

class App {
  housesController = new HouseController()
  carsController = new CarsController()

  
}

window['app'] = new App()


