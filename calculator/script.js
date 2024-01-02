window.onload = function () {
    var input = document.getElementById("inputbox");
    var container = document.getElementById("container");

    container.addEventListener("click", function (e) {
        buttonClick(e.target.id);
    });

    var calc = document.getElementById("Button=");
    calc.addEventListener("click", calculate);

    var C = document.getElementById("ButtonC");
    C.addEventListener("click", erase);

    function buttonClick(buttonid) {
        if ((buttonid != "ButtonC") && (buttonid != "Button=")) {
            var button = document.getElementById(buttonid);
            var s = buttonid;
            s = s.replace("Button", "");
            entries(s);
        }
    }

    function entries(s) {
        input.value += s;
    }

    function calculate() {
        if (input.value == ".") {
            alert("Please enter a mathematical expression");
        }
        input.value = eval(input.value);
    }

    function erase() {
        input.value = "";
    }
};
