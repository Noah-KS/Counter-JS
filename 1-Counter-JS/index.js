function increment() {
    //Number converts values to number
    //getElementById selects an element in the DOM using its ID
    //innerHTML accesses/changes the HTML content inside the selected element
    var num = Number(document.getElementById('number').innerHTML);
    
    document.getElementById('number').innerHTML = num+1;
}

function decrement() {

    var num = Number(document.getElementById('number').innerHTML);
    
    document.getElementById('number').innerHTML = num-1;
}

function neutral() {
    
    document.getElementById('number').innerHTML = 0;
}