//loads the shopping cart object into cartArray

var cartArray = JSON.parse(localStorage.getItem("cartArray"));
var customer = JSON.parse(localStorage.getItem("customer"));
var cartTotal = 0;

function displayCart(cart, makesHTML, customerInfo, updateCart) {
    var htmlString = '';
    
    //loops through customer cart and grabs relevent data
    for (var i in cart) {
        var qty = cart[i].itemCount;
        var desc = cart[i].desc;
        var price = cart[i].price;
        var totalPrice = qty * parseInt(price);
        htmlString += makesHTML(qty, desc, price, totalPrice); 
        cartTotal += totalPrice;
    }
    updateCart(cartTotal, customerInfo);
    //displays the cart items onto the screen, we created an HTML string during the for loop
    var el = document.createElement("div");
    el.innerHTML = htmlString;
    document.getElementById("cartItems").appendChild(el);
}

//generates the html string used by diplayCart function    
function generateHtml(qty, desc, price, totalPrice) {
    var htmlCode = '<li class="row row-fluid"><div class="quantity col-xs-1">' + qty + '</div><div class="itemName col-xs-3">' + desc + '</div><div class="price col-xs-2 col-xs-offset-2">$ ' + price + '</div></div><div class="price col-xs-3">$ ' + totalPrice + '</div><div class="popbtn"><a class="arrow"></a></div></li>';
    return (htmlCode);
}
// calculates and displays cart totals used by displayCart
function calcCartTotals (cartTotal, customerInfo){
    var orderTotal = 0;
    var tax = 0;
    var shipping = document.getElementById("shipping").value;
    shipping = parseInt(shipping);
    if(customerInfo.state == 'CO'){
                                   tax = cartTotal * .075;
                                   parseFloat(Math.round(tax * 100) / 100).toFixed(2)
                                  };
    orderTotal += tax;
    orderTotal += cartTotal;
    orderTotal += shipping;
    parseFloat(Math.round(cartTotal * 100) / 100).toFixed(2);
    dget("cartTotal", cartTotal);
    dget("tax", tax);
    dget("orderTotal", orderTotal);  
}
//calls display cart
displayCart(cartArray, generateHtml, customer, calcCartTotals);


// Daves code --------------------------------------------------------------v

    //retreive values and assign to variables
        var cartCreated = localStorage.getItem("cartCreated");
        var firstSetDate = localStorage.getItem("firstSetDate");
        var firstName = localStorage.getItem( "firstname");
        var lastName = localStorage.getItem( "lastname");
        var age = localStorage.getItem( "age");
        var favProduct = localStorage.getItem( "favproduct");

    //create a new person called shopper
        var shopper = new Person(firstName,lastName,age,favProduct);


    //Person factory
    function Person(first, last, age, product) 
    {
        
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.favoriteProductCategory = product;
    }

    //full name maker
    Person.prototype.fullName = function() 
    {
        return this.firstName + " " + this.lastName;
    };






    //utils
    //saves writing document.getElementById(eid).innerHTML = content over and over;
    function dget(eid,content)
    {
        document.getElementById(eid).innerHTML = content;
    }



    //Display stuff to the screen

    //Shows when cart was first set (incomplete)
    //dget('day', firstSetDate);

    //show shoppers full name
    dget('name', 'Welcome back '+shopper.fullName()+'!');
    //this would have been 
    //document.getElementById('name').innerHTML = 'Welcome back '+shopper.fullName()+'!'












