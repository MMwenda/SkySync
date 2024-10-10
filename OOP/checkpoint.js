class Product {  
    constructor(productId, name, price) {  
        this.productId = productId;  
        this.name = name;  
        this.price = price;  
    }  
}  

class ShoppingCartItem {  
    constructor(product, quantity) {  
        this.product = product;  
        this.quantity = quantity;  
    }  

    totalPrice() {  
        return this.product.price * this.quantity;  
    }  
}  

class ShoppingCart {  
    constructor() {  
        this.items = [];  
    }  

    addItem(product, quantity) {  
        const existingItem = this.items.find(item => item.product.productId === product.productId);  
        if (existingItem) {  
            existingItem.quantity += quantity; // Update quantity if the item exists  
        } else {  
            this.items.push(new ShoppingCartItem(product, quantity)); // Add new item  
        }  
    }  

    removeItem(productId) {  
        this.items = this.items.filter(item => item.product.productId !== productId); // Remove item by productId  
    }  

    totalItems() {  
        return this.items.reduce((total, item) => total + item.totalPrice(), 0); // Calculate total price of items  
    }  

    displayCart() {  
        if (this.items.length === 0) {  
            console.log("The cart is empty.");  
            return;  
        }  
        this.items.forEach(item => {  
            console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: $${item.totalPrice().toFixed(2)}`);  
        });  
        console.log(`Total Cart Price: $${this.totalItems().toFixed(2)}`);  
    }  
}  

