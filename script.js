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
function getValue (idName){
   return parseInt(document.getElementById(idName).value);
}

//Function for getting value
function getInfo (idName){
    var fromInput = document.getElementById(idName).value;
    if (fromInput != undefined){
        return fromInput;
    }
    else {
        return document.getElementById(idName).innerText;
    }
}


//Function for updating InnerText
function updateInfo(idName, value){
    document.getElementById(idName).innerText = value;
}


//Function for showing booking confirmation
function bookingConfirmation(){
    var firstClassQuantity = getInfo("firstClass");
    var economyQuantity = getInfo("economy");
    if (firstClassQuantity == 0 && economyQuantity == 0){
        alert("Please buy at least one ticket!");
        return "Ticket quantity 0 is not acceptable";
    }
    updateInfo("showTravelTo", getInfo("travelTo"));
    updateInfo("showDepartureFrom", getInfo("departureFrom"));
    updateInfo("showFirstClass", firstClassQuantity);
    updateInfo("showEconomy", economyQuantity);
    updateInfo("showSubtotal", getInfo("subtotal"));
    updateInfo("showVat", getInfo("vat"));
    updateInfo("showTotal", getInfo("total"));
    document.getElementById('bookingArea').style.display = "none";
    document.getElementById('confirmation').style.display = "block";
}