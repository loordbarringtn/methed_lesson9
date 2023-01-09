const cart = {
    items: [],
    totalPrice: 0,
    count: 0,
    getTotalPrice() {
        return this.totalPrice;
    },
    add(productName, productPrice, quantity) {
        this.items.push({productName,productPrice,quantity});
        this.totalPrice += (productPrice * quantity);
        this.count += quantity;
    },
    increaseCount() {
        this.count++;
    },
    calculateItemPrice() {
        return this.items.reduce((acc,cur) => acc + cur.productPrice * cur.quantity, 0);
    },
    clear() {
        this.items.length = 0;
        this.totalPrice = 0;
        this.count = 0;
    },
    print() {
        console.log(JSON.stringify(this.items));
        console.log(`Общая стоимость корзины: ${this.getTotalPrice()}`);
    },
};

cart.add('Яблоко',15,25);
cart.add('Ананас',150,4);
cart.add('Мандарин',20,20);
cart.add('Арбуз',230,2);
cart.print();

console.log(cart.getTotalPrice());
console.log(cart.count);

console.log(cart.calculateItemPrice());

cart.clear();
cart.print();