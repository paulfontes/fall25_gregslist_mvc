import { AppState } from "../AppState.js"
import { housesServices } from "../services/HouseService.js";
import { getFormData } from "../utils/FormHandler.js";

export class HouseController {
    constructor() {
    this.drawHouses()
    AppState.on('houses', this.drawHouses)
    }
 

drawHouses() {
    console.log('Drawing Houses!!');
    const houses = AppState.houses
    let housesHTML = ''
    houses.forEach(house => housesHTML += house.housingTemplate)
    let houseListingElm = document.getElementById('house-listings')
    houseListingElm.innerHTML = housesHTML
    

}

createHouse() {
    event.preventDefault()
    let form = event.target
    const houseData = getFormData(form)
    console.log(houseData)
    housesServices.createHouse(houseData)
    // @ts-ignore
    form.reset()
}

}