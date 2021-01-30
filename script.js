//Function for updating quantity
function updateQuantity(ticketClass, plusOrMinus){
    var currentQuantity;
    currentQuantity = getValue(ticketClass);
    var updatedQuantity = currentQuantity+plusOrMinus;
    if (updatedQuantity < 0){
        return "Cannot decrease the value anymore.";
    }
    document.getElementById(ticketClass).value = updatedQuantity;
    calculateTotal();
}

//Function for calculating total
function calculateTotal(){
    var subtotal;
    var vat;
    var firstClassPrice = getValue('firstClass')*150;
    var economyPrice = getValue('economy')*100;
    subtotal = firstClassPrice + economyPrice;
    vat = (subtotal * 10)/100;
    var total = subtotal + vat;
    updateInfo('subtotal', subtotal);
    updateInfo('vat', vat);
    updateInfo('total', total);
}

//Function for getting quantity of a ticket class
function getValue (ticketClass){
   return parseInt(document.getElementById(ticketClass).value)
}

//Function for updating InnerText
function updateInfo(idName, value){
    document.getElementById(idName).innerText = value;
}