function updatePrice() {
    let price = 0;
    let prices = getPrices();
    let checkDiv = document.getElementById("checkboxes");
    let selectDiv = document.getElementById("sel");
    let check_var = 0;
    let select_var = 0;
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function (radio) {
        if (radio.checked) {
            price = prices.prodOptions[radio.value];
            //checkbox
            if (
                radio.value === "p1" ||
                radio.value === "p2"
            ) {
                checkDiv.style.display = "none";
                check_var = 0;
            } else {
                checkDiv.style.display = "block";
                check_var = 1;
            }
            //select
            if (radio.value === "p1" || radio.value === "p3") {
                selectDiv.style.display = "none";
                select_var = 0;
            } else {
                selectDiv.style.display = "block";
                select_var = 1;
            }
        }
    });


    let s = document.getElementsByName("prodType");
    let select = s[0].value - 1;
    if (select !== undefined && select_var === 1) {
        price += prices.prodType[select];
    }
    //смотрим какие товарные свойства выбраны
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            let g_Price = prices.prodProperties[checkbox.name];
            if (g_Price !== undefined && check_var === 1) {
                price += g_Price;
            }
        }
    });

    let res = document.getElementById("result");

    //подсчет цены с учетом количества товара
    let g_amount = document.getElementsByName("amount");
    let m = g_amount[0].value.match(/^[0-9]+$/);
    if (m !== null) {
        price *= m;
        res.innerHTML = "Итоговая стоимость: " + price;
    } else {
        res.innerHTML = "Данные введены некорректно";
    }
}

function getPrices() {
    return {
        prodOptions: {
            p1: 159,
            p2: 89,
            p3: 55
        },
        prodProperties: {
            prop1: 10,
            prop2: 2,
            prop3: 3
        },
        prodType: [0, 5, 7]
    };
}

window.addEventListener("DOMContentLoaded", function () {
    // Назначаем обработчик радиокнопок
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function (radio) {
        radio.addEventListener("change", function () {
            updatePrice();
        });
    });

    // Находим select по имени в DOM.
    let sel = document.getElementsByName("prodType");
    let select = sel[0];
    // Назначаем обработчик на изменение select
    select.addEventListener("change", function () {
        updatePrice();
    });

    // Назначаем обработчик чекбоксов
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            updatePrice();
        });
    });

    let am = document.getElementsByName("amount");
    let g_am = am[0];
    // Назначаем обработчик на изменение select
    g_am.addEventListener("change", function () {
        updatePrice();
    });

    updatePrice();
});


