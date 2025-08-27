import { generateId } from "../utils/GenerateId.js";

export class House {
    constructor(data) {
        this.id = data.id || generateId();
        this.year = data.year;
        this.bedrooms = data.bedrooms;
        this.bathrooms = data.bathrooms;
        this.sqft = data.sqft;
        this.price = data.price;
        this.description = data.description;
        this.imgUrl = data.imgUrl;
    }

    get housingTemplate() {
        return`
        <div class="col-6 card">
              <img  src="${this.imgUrl}" class="card-img-top house-card-img"  alt="">
              <div class="card-body">
                <h5 class="card-title">${this.description}</h5>
                <p class="card-text">This house was built in ${this.year}. It has ${this.bedrooms} bedrooms and ${this.bathrooms} bathrooms. Notably it is ${this.sqft} sqft and for the low price of ${this.price} it can be yours.  </p>
              </div>
            </div>
        
        `
    }
}