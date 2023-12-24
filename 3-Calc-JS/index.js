function display(num) {
    document.getElementById("text").value += num;
}

function calc() {
    var text = document.getElementById("text").value;
    var answer = eval(text);
    document.getElementById("text").value = answer;
}

function clearText() {
    document.getElementById("text").value = '';
}