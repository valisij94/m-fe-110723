class Product {

  /*
  5. Оптимизируем конструктор. При создании товара, нужно проверять, что название, категория и цена - непустые, а цена - больше 1. Если что-то пустое или цена меньше 1 - выводим сообщение в консоль. Пустое наименование заполняем "Default Name", пустую категорию - "Default Category".
  */
  constructor(name, category, price, description) {
    if (!name?.trim() || !category?.trim()) {
      console.log('Please fill all arguments!');
    }
    this.name = name || 'Default name';
    this.category = category || 'Default category';
    if (!isNaN(price) && price > 1) {
      this.price = price;
    }
    else {
      throw new Error('Incorrect price!');
    }
    this.description = description;
  }

  /*
  3. Работаем с методами. Добавим нашему товару функцию changePrice. Она должна менять цену нашего товара - прибавлять к ней переданное значение.
  */

  /*
  4. Оптимизируем работу метода из п.3. Нужно при изменении цены проверять, что она не меньше 1. Если новая цена будет меньше 1 - то нужно выводить в консоль сообщение об этом, а цену товару ставить 1.
  */

  changePrice(addAmount) {
    this.price = this.price + addAmount;
    if (this.price < 1) {
      console.log('Price should be greater than 1!');
      this.price = 1;
    }
  }

}

const prod1 = new Product('Test', 'category', 100, 'Descr');
console.log(prod1)


class Cart {

  constructor() {
    this.productsStorage = {};
    this.totalPrice = 0;
  }

  addProduct(product) {
    if (this.productsStorage[product.name]) {
      this.productsStorage[product.name] += 1;
    }
    else {
      this.productsStorage[product.name] = 1;
    }
    this.totalPrice += product.price;
  }
}


const cart = new Cart();
const prod2 = new Product('Product', 'category', 200, 'Descr');

cart.addProduct(prod1);
cart.addProduct(prod2);
cart.addProduct(prod2);

console.log(cart)