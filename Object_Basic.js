// Ex 1
// Create 3 different objects for 3 different themes:  car, animal and person. The end result should be 9 objects in total.  These objects should have some properties like name, brand, model, type, color, weight, age... of course inherent to its type because, for instance, an animal has no brand... 
// Each object should have at least one method, that shows some properties about each theme. Feel free to expand on that.
// The message from the methods must be printed on the browser too.



var car = {
        carBrand: "Maserati",
        carModel: "Grecale",
        carType: "SUV",
        carColor: "yellow",
        carImage: "https://images.pexels.com/photos/6462662/pexels-photo-6462662.png",

        carDescription: function() {
            return `${this.carBrand} <br> ${this.carModel} <br> ${this.carType} <br> ${this.carColor} <br> <img src="${this.carImage}" alt="hello">`;
        }
    }
    //print single properties

document.getElementById("carBrand").innerHTML = car.carBrand;
document.getElementById("carModel").innerHTML = car.carModel;
document.getElementById("carType").innerHTML = car.carType;
document.getElementById("carColor").innerHTML = car.carColor;
document.getElementById("carImage").innerHTML = `<img src="${car.carImage}" alt="hello">`;

document.getElementById("description").innerHTML += car.carDescription();