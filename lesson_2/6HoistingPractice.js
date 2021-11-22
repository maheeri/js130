var Image;
var Pet;
var catImage;
var pudding;

Pet = function (name, image) {
  this.name = name;
  this.image =  image;
}

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

Image = class {
  constructor(file) {
    this.file = file;
  }
}

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);