function Product(name, category, price, stock) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
  }
  function Inventory() {
    this.products = []; 
  }
  Inventory.prototype.addProduct = function(product) {
    if (product instanceof Product) {
      this.products.push(product);
      console.log(`Product added: ${product.name}`);
    } else {
      console.log('Invalid product. Please provide a valid Product object.');
    }
  };
  Inventory.prototype.deleteProduct = function(name) {
    const initialLength = this.products.length;
    this.products = this.products.filter(product => product.name !== name);
    if (this.products.length < initialLength) {
      console.log(`Product deleted: ${name}`);
    } else {
      console.log(`Product not found: ${name}`);
    }
  };
  const inventory = new Inventory();
  
  const product1 = new Product('Laptop', 'Electronics', 999.99, 10);
  const product2 = new Product('Phone', 'Electronics', 499.99, 25);
  
  inventory.addProduct(product1);
  inventory.addProduct(product2);
  
  console.log('Current Inventory:', inventory.products);
  
  inventory.deleteProduct('Phone');
  console.log('Current Inventory:', inventory.products);
  
  inventory.deleteProduct('Tablet');
  