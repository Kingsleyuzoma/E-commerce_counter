//HTML element
const incrementButton= document.getElementById('increment')
const counterButton = document.getElementById('counter')
const decrementButton = document.getElementById('decrement')
const resetButton = document.getElementById('reset');
const priceButton = document.getElementById('price')
//counter and price state
let counter = 0;
let price = 20;

//Update counter Value in the DOM
function count() {
    counterButton.innerHTML = counter;
    priceButton.innerHTML = counter * price
    
}

//Event listener for increment button
incrementButton.addEventListener('click', function(){
    counter++;
    count();
});

//Event listener for decrement button
decrementButton.addEventListener('click', function(){
    if (counter > 0) {
        counter--;
        count();
        
    }
});

//Event listener for reset button
resetButton.addEventListener('click', function(){
    counter = 0;
    count();
})








