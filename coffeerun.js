//var submitButton = document.querySelector('[name="submit"]')
//submitButton.addEventListener('click', function(event))
//var coffeeForm = document.querySelector('.form');
// var submitButton = document.querySelector('.btnSubmit');
// var resetButton = document.querySelector('.btnReset');
// //var coffeeName = document.querySelector('.nameInput');
// //var emailName = document.querySelector('.nameInput');
// var storedOrders = document.querySelector('.newOrders');
// var listItems = document.createElement('li');
// var flavorShot = document.querySelector('.flavor-control')
// var coffeeSize = document.querySelector('.[name="size"]')
// var coffeeName = document.querySelector('.nameInput');
// var emailName = document.querySelector('.nameInput');
// var coffeeOrders = [] 
var storageArray = [];

var coffeeForm = document.querySelector('.form');
coffeeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    makeOrder();
});

var makeOrder = function () {
    var coffee = document.querySelector('.nameInput')
    console.log(coffee.value)
    coffeename = coffee.value

    var emailAddress = document.querySelector('.emailInput');
    console.log(emailAddress.value)
    custemail= emailAddress.value

    var size = document.querySelector('[name=size]')
    console.log(size.value)
    coffeesize = size.value

    var flavor = document.querySelector('.flavor-control')
    console.log(flavor.value)
    flavoradd = flavor.value

    var myOrderObj = {
        coffee : coffeename,
        emailAddress : custemail,
        size : coffeesize,
        flavor : flavoradd
    }
    orderRow(myOrderObj)


    // var deleteButton = document.createElement('input')
    // deleteButton.setAttribute('type', 'button')
    // deleteButton.setAttribute('value', 'Delete Button')
    // deleteButton.addEventListener('click', deleteOrder)

    // var row = document.createElement('li');

    // var textContainer = document.createElement('div');

    // var storageString = 'Order: ' + coffeename + ' ' +
    // custemail + ' size:' + coffeesize + ' Flavor: ' + flavoradd

    // textContainer.textContent = 'Order: ' + coffeename + ' ' +
    // custemail + ' size:' + coffeesize + ' Flavor: ' + flavoradd

    // var myJson = JSON.stringify(storageString);
    // console.log(myJson);
    
    // storageArray.push(myObj);
    // console.log(storageArray);
 
    // localStorage.setItem('order', JSON.stringify(storageArray));

    // JSON.parse(localStorage.getItem('order'));

     var list = document.querySelector('.coffeeOrders');
    // row.appendChild(deleteButton);
    // row.appendChild(textContainer);
    // list.appendChild(row);
 
};

var deleteOrder = function(event) {
    console.log(event.target)
    var button = event.target;
    var item = button.parentNode;
    var list1 = item.parentNode;
    list1.removeChild(item);

}
var orderRow = function(order) {
    var newOrder = document.createElement('li');
    newOrder.textContent = 'Order: ' + order.coffee + 
        ' Email: ' + order.emailAddress + 
        ' Size: ' + order.size + 
        ' Flavor: ' + order.flavor + 
        ' Strength: ' + order.strength
    var removeButton = document.createElement('button')
    removeButton.textContent = 'remove'
    newOrder.appendChild(removeButton)
    var coffeeList = document.querySelector('.coffeeOrders');
    coffeeList.appendChild(newOrder)
}
var postOrder = function(order) {
    return $.ajax('https://dc-coffeerun.herokuapp.com/api/coffeeorders', {
        method:'POST',
        body: JSON.stringify(order)
       
    })
}

$.ajax('https://dc-coffeerun.herokuapp.com/api/coffeeorders', {
    method: 'GET',
    success: function(data) {
        var ordersArray = Object.values(data);
        ordersArray.forEach(order => {
            console.log(order)
            orderRow(order)
        });
        
    }
})




