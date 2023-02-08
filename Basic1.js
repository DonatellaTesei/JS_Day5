// Create 3 different classes:  car, animal and person. These classes should have some properties like name, brand, model, type, color, weight, age... of course inherent to its type because, for instance, an animal has no brand... 

// Each class should have at least one method, that shows some properties about each theme. Feel free to expand on that.

// Create, using the classes, 3 different objects for each class.

// The results from the methods must be printed on the browser too.


class Car {
    carBrand;
    carModel;
    carType;
    carColor;
    carImage;


    constructor(cBrand, cModel, cType, cColor, cImage) {
        this.carBrand = cBrand;
        this.carModel = cModel;
        this.carType = cType;
        this.carColor = cColor;
        this.carImage = cImage;


    }

    carDescription() {
        return `<br> ${this.carType} <br>  ${this.carBrand} <br> ${this.carModel} <br> ${this.carColor} <br> <img src="${this.carImage}" alt="hello">`;
    }
}

var car1 = new Car("Maserati", "Grecale", "SUV", "yellow", "https://images.pexels.com/photos/6462662/pexels-photo-6462662.png");
var car2 = new Car("Maserati", "GranTurismo", "sport car", "silver", "https://cdn.pixabay.com/photo/2020/05/19/10/05/opel-5190050_1280.jpg");
var car3 = new Car("Aston Martin", "DB770", "sport car", "black", "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_1280.jpg");
console.log(car1);

document.getElementById("description").innerHTML += car1.carDescription();
document.getElementById("description").innerHTML += car2.carDescription();
document.getElementById("description").innerHTML += car3.carDescription();



class Animal {


    anType;
    anColor;
    anWeight;
    anAge;
    anImage;


    constructor(aType, aColor, aWeight, aAge, aImage) {
        this.anType = aType;
        this.anColor = aColor;
        this.anWeight = aWeight;
        this.anAge = aAge;
        this.anImage = aImage;


    }

    anDescription() {
        return `<br> ${this.anType} <br>  ${this.anAge} years old <br> ${this.anWeight} kg <br> ${this.anColor} <br> <img src="${this.anImage}" alt="hello">`;
    }
}

var an1 = new Animal("Cat", "black", "5", "1", "https://cdn.pixabay.com/photo/2018/02/21/05/17/cat-3169476_1280.jpg");
var an2 = new Animal("Elephant", "gray", "200", "25", "https://cdn.pixabay.com/photo/2017/10/20/10/58/elephant-2870777__480.jpg");
var an3 = new Animal("Koala", "gray", "3.5", "2", "https://cdn.pixabay.com/photo/2017/08/07/22/35/animals-2608662__480.jpg");
console.log(car1);

document.getElementById("description").innerHTML += an1.anDescription();
document.getElementById("description").innerHTML += an2.anDescription();
document.getElementById("description").innerHTML += an3.anDescription();