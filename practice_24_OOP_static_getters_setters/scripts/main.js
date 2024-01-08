class Product {

  #purchasePrice;

  static purchaseCoefficient = 0.75;
  static #instancesCounter = 0;

  constructor(title, category, price, description) {
    this.title = title;
    this.category = category;
    this.price = price;
    this.description = description;
    this.#purchasePrice = Product.purchaseCoefficient * price;
    Product.#instancesCounter = Product.#instancesCounter + 1;
  }

  getAnnotation() {
    return `Product ${this.title}, price - ${this.price}`;
  }

  get annotation() {
    return `Product ${this.title}, price - ${this.price}`;
  }

  get purchasePrice() {
    return this.#purchasePrice;
  }

  set purchasePrice(value) {
    if (value > this.price) {
      throw new Error('Purchase price should be less than price!')
    }
    this.#purchasePrice = value;
  }

  static setPurchaseCoefficient(value) {
    if (value > 0 && value < 1) {
      Product.purchaseCoefficient = value;
    }
  }

  static get instancesCounter() {
    return Product.#instancesCounter;
  }
}

const p = new Product('Ball', 'Sport', 100, 'Super Ball!');
console.log(Product.instancesCounter);
const p1 = new Product('Ball', 'Sport', 100, 'Super Ball!');
console.log(Product.instancesCounter)
const p2 = new Product('Ball', 'Sport', 100, 'Super Ball!');
console.dir(Product)
