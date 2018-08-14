var dollar = "$";

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var ask = getParameterByName('ask');
if (ask <= 0 || ask > 1200) {
    ask = 5
} else if (ask >= 1193 || ask == 1200) {
    ask = 1200;
    document.getElementById("donate-option-1").style.width = "100%";
    document.getElementById("donation_amount_2").style.display = "none";
    document.getElementById("label2").style.display = "none";
    document.getElementById("donation_amount_3").style.display = "none";
    document.getElementById("label3").style.display = "none";
    document.getElementById("donation_amount_4").style.display = "none";
    document.getElementById("label4").style.display = "none";
    document.getElementById("donation_amount_5").style.display = "none";
    document.getElementById("label5").style.display = "none";
    document.getElementById("donation_amount_6").style.display = "none";
    document.getElementById("label6").style.display = "none";

}

document.getElementById("donation_amount_1").value = ask;
document.getElementById("label1").innerText = dollar + ask;

function round5(x) {
    return Math.ceil(x / 5) * 5;
}

if (ask < 40) {
    var askInc1 = round5(ask * 2);
    var askInc2 = round5(ask * 3);
    var askInc3 = round5(ask * 4);
    var askInc4 = round5(ask * 5);
    var askInc5 = round5(ask * 6);
    var askInc6 = round5(ask * 7);
} else if (ask >= 40 && ask <= 342) {
    var askInc1 = round5(ask * 1.5);
    var askInc2 = round5(ask * 2);
    var askInc3 = round5(ask * 2.5);
    var askInc4 = round5(ask * 3);
    var askInc5 = round5(ask * 3.5);
    var askInc6 = round5(ask * 4);
} else if (ask >= 343 && ask <= 800) {
    var askInc1 = round5(ask * 1.1);
    var askInc2 = round5(ask * 1.2);
    var askInc3 = round5(ask * 1.3);
    var askInc4 = round5(ask * 1.4);
    var askInc5 = round5(ask * 1.5);
    var askInc6 = round5(ask * 1.6);
} else if (ask >= 801 && ask <= 1043) {
    var askInc1 = round5(ask * 1.1);
    var askInc2 = round5(ask * 1.12);
    var askInc3 = round5(ask * 1.13);
    var askInc4 = round5(ask * 1.14);
    var askInc5 = round5(ask * 1.15);
    var askInc6 = round5(ask * 1.16);
} else if (ask >= 1044 && ask <= 1175) {
    var askInc1 = round5(parseInt(ask) + parseInt(5));
    var askInc2 = round5(parseInt(ask) + parseInt(10));
    var askInc3 = round5(parseInt(ask) + parseInt(15));
    var askInc4 = round5(parseInt(ask) + parseInt(20));
    var askInc5 = round5(parseInt(ask) + parseInt(25));
    var askInc6 = round5(parseInt(ask) + parseInt(30));
} else if (ask >= 1176 && ask <= 1192) {
    var askInc1 = round5(parseInt(ask) + parseInt(2));
    var askInc2 = round5(parseInt(ask) + parseInt(3));
    var askInc3 = round5(parseInt(ask) + parseInt(4));
    var askInc4 = round5(parseInt(ask) + parseInt(5));
    var askInc5 = round5(parseInt(ask) + parseInt(6));
    var askInc6 = round5(parseInt(ask) + parseInt(7));
}

document.getElementById("donation_amount_2").value = askInc1;
document.getElementById("label2").innerText = dollar + askInc1;
document.getElementById("donation_amount_3").value = askInc2;
document.getElementById("label3").innerText = dollar + askInc2;
document.getElementById("donation_amount_4").value = askInc3;
document.getElementById("label4").innerText = dollar + askInc3;
document.getElementById("donation_amount_5").value = askInc4;
document.getElementById("label5").innerText = dollar + askInc4;
document.getElementById("donation_amount_6").value = askInc5;
document.getElementById("label6").innerText = dollar + askInc5;
