class Shape {
    area() {
      throw new Error('Method "area()" must be implemented in subclasses');
    }
    perimeter() {
      throw new Error('Method "perimeter()" must be implemented in subclasses');
    }
  }
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
    area() {
      return Math.PI * this.radius * this.radius;
    }
    perimeter() {
      return 2 * Math.PI * this.radius;
    }
  }
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
    area() {
      return this.width * this.height;
    }
    perimeter() {
      return 2 * (this.width + this.height);
    }
  }
  class Triangle extends Shape {
    constructor(a, b, c) {
      super();
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    area() {
      const s = (this.a + this.b + this.c) / 2;
      return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
    perimeter() {
      return this.a + this.b + this.c;
    }
  }
  const circle = new Circle(5);
  console.log(`Circle Area: ${circle.area()}`);          
  console.log(`Circle Perimeter: ${circle.perimeter()}`); 
  
  const rectangle = new Rectangle(4, 6);
  console.log(`Rectangle Area: ${rectangle.area()}`);     
  console.log(`Rectangle Perimeter: ${rectangle.perimeter()}`); 
  
  const triangle = new Triangle(3, 4, 5);
  console.log(`Triangle Area: ${triangle.area()}`);       
  console.log(`Triangle Perimeter: ${triangle.perimeter()}`); 
  