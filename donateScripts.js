function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// query string: ?foo=lorem&bar=&baz
var ask = getParameterByName('ask');
if (ask <= 0 || ask >= 1200) {
    ask = 5
}
document.getElementById("donation_amount_1").value = ask;
document.getElementById("label1").innerText = ask;

var askInc1 = ask*2;
var askInc2 = ask*3;
var askInc3 =ask*4;
var askInc4 =ask*5;
var askInc5 =ask*6;

document.getElementById("donation_amount_2").value = askInc1;
document.getElementById("label2").innerText = askInc1;
document.getElementById("donation_amount_3").value = askInc2;
document.getElementById("label3").innerText = askInc2;
document.getElementById("donation_amount_4").value = askInc3;
document.getElementById("label4").innerText = askInc3;
document.getElementById("donation_amount_5").value = askInc4;
document.getElementById("label5").innerText = askInc4;
document.getElementById("donation_amount_6").value = askInc5;
document.getElementById("label6").innerText = askInc5;
