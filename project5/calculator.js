function calc(event) {
    event.preventDefault();
    let a = document.getElementsByName("amount");
    let r = document.getElementById("result");
    let g = document.getElementsByName("goods");
    let reg = a[0].value.match(/^[0-9]+$/);
    if (reg !== null) {
        a = parseInt(a[0].value, 10);
        let cost;
        if (g[0].value === "pumpkin mug") {
            cost = 259;
        }
        if (g[0].value === "book") {
            cost = 450;
        }
        if (g[0].value === "chokolate") {
            cost = 55;
        }
        if (g[0].value === "funchose") {
            cost = 109;
        }
        if (g[0].value === "tea") {
            cost = 94;
        }
        r.innerHTML = a * cost;
    } else {
        r.innerHTML = "Некорректный ввод данных";
    }
    return false;
}
window.addEventListener("DOMContentLoaded", function () {
    let b = document.getElementById("button1");
    b.addEventListener("click", calc);
});