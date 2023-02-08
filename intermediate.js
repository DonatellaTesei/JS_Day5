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

class Fish extends Animal {
    aEnvironment;
    constructor(aType, aColor, aWeight, aAge, aImage, aEnvironment) {
        super(aType, aColor, aWeight, aAge, aImage);
        this.aEnvironment = aEnvironment;
    }

    fishDescription() {
        return `<br> ${this.anType} <br>  ${this.anAge} years old <br> ${this.anWeight} kg <br> ${this.anColor} <br> ${this.aEnvironment}<br> <img src="${this.anImage}" alt="hello"> `;
    }
}

var an1 = new Animal("Cat", "black", "5", "1", "https://cdn.pixabay.com/photo/2018/02/21/05/17/cat-3169476_1280.jpg", "home");
var an2 = new Animal("Elephant", "gray", "200", "25", "https://cdn.pixabay.com/photo/2017/10/20/10/58/elephant-2870777__480.jpg", "jungle");
var an3 = new Animal("Koala", "gray", "3.5", "2", "https://cdn.pixabay.com/photo/2017/08/07/22/35/animals-2608662__480.jpg", "jungle");
var fish1 = new Fish("Blue Fish", "blue", "0.3", "1", "https://cdn.pixabay.com/photo/2021/06/27/09/21/fish-6368233_1280.jpg", "sweet water");

document.getElementById("description").innerHTML += an1.anDescription();
document.getElementById("description").innerHTML += an2.anDescription();
document.getElementById("description").innerHTML += an3.anDescription();
document.getElementById("description").innerHTML += fish1.fishDescription();