import { AppState } from "../AppState.js"

export class HouseController {
    constructor() {
        this.drawHouses()
        

    }

drawHouses() {
    console.log('Drawing Houses!!');
    const houses = AppState.houses
    let housesHTML = ''
    houses.forEach(house => housesHTML += housesHTML += house.housingTemplate)
    let houseListingElm = document.getElementById('house-listings')
    houseListingElm.innerHTML = housesHTML



}
}