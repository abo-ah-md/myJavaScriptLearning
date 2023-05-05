//Export module 
//console.log("this is an imported module");



//Declaring variables in a module is only readable to the exported distantion but unmodifible
const totalprice = 10;
const cart = [];

 const addToCart = (cartItem,quantity)=>{

cart.push({cartItem,quantity});
console.log(`You have added ${quantity} ${cartItem} to the cart`);
console.log(cart);
}

//export{totalprice,addToCart};


//you can export a default value of the module without the need to declare it in the module 
//then you will make a variable for it in the import destaination 

export default (cartItem,quantity)=>{

    cart.push({cartItem,quantity});
    console.log(`You have added ${quantity} ${cartItem} to the cart`);
    console.log(cart);
    }