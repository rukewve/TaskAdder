let input = document.getElementById("input");
let btn = document.getElementById("btn");
let display = document.getElementById("taskdisplay");
let clear = document.getElementById('cleartask');


function inp() {

    if (input.value == '') {
        alert('input a Task');
    }
    else {
        const val = document.createElement("span");
        val.style.border = " 1px solid rgba(225, 225, 225, 0.8)";
        val.style.background = "#000000";
        val.style.paddingLeft = "15px";
        val.style.width = "370px";
        val.style.height = "30px";
        val.style.textAlign = "left";
        val.style.paddingTop = "5px";
        val.style.marginBottom = "10px";
        const val2 = document.createTextNode(input.value, "Delete");
        val.appendChild(val2);
        display.appendChild(val);
        input.value = input.value = "";
    }
}


function cleartask() {
    if (display.innerHTML) {
        display.innerHTML = display.innerHTML = "";
    }
}



btn.addEventListener('click', inp);
clear.addEventListener('click', cleartask);
