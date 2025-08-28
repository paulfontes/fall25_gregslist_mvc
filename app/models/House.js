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
        <div class="col-5 card">
              <img  src="${this.imgUrl}" class="card-img-top house-card-img"  alt="">
              <hr>
              <div class="card-body">
                <h5 class="card-title">${this.description}</h5>
                <span><b>Built: </b>${this.year}</span>
                <span><b>Bedrooms: </b>${this.bedrooms}</span>
                <span><b>Bathrooms: </b>${this.bathrooms}</span>
                <span><b>Built: </b>${this.year}</span>
                <br>
                <span><b>Square Feet: </b>${this.sqft}'</span>
                <br>
                <span><b>Price: </b>${this.priceAsUSD}</span>
                </div>
                </div>
                <div class="text-end">
                <button type="button" class="btn btn-primary">Delete</button>
                </div>
        `
    }
    get priceAsUSD(){
        return '$' + this.price.toLocaleString()
    }
}