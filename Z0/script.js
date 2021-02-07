function task1() {
    const div = document.getElementById("task1");
    div.className = "border-violet";
    div.innerText = "Hello world!";
}

function task2() {
    const div = document.getElementById("task2");

    const span = document.createElement("span");
    span.className = "red-color";
    span.innerText = "SPAN";

    div.appendChild(span);
}

function task3() {
    const div = document.getElementById("task3");

    div.innerText = "";
}

function task4() {
    const div = document.getElementById("task4");
    const span = document.getElementById("span-to-remove");

    div.removeChild(span);
}

function task5() {
    const input = document.querySelector("input[name='task5-input']");
    console.log(input.value);

    document.getElementById("task5-value").innerText = input.value;
}

function task6() {
    const div = document.getElementById("task6");
    div.className = "green-color";
}

function task7() {
    const div = document.getElementById("task7");

    const currentClass = div.className;

    if (currentClass === "red-color") {
        div.className = "green-color";
    } else {
        div.className = "red-color";
    }
}

function task8() {
    const x = 8;
    console.log("Dzień dobry " + x);
}


function mouseIn() {
    const div = document.getElementById("task9");
    div.className = "background-green";
}

function mouseOut() {
    const div = document.getElementById("task9");
    div.className = "background-red";
}

function task9() {
    const array = [1, 2, 3];

    const element = array.find(function (e) {
        return e === 2;
    })

    console.log(element);
}
