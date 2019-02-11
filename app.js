window.addEventListener("keypress", myfunc1)

function myfunc1(event) {
    let value1 = event.which;
    document.getElementById("outputWhich").innerHTML = value1;

    let value2 = event.code;
    document.getElementById("outputCode").innerHTML = value2;

    let value3 = event.key;
    document.getElementById("outputKey").innerHTML = value3;
}

