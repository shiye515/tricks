function htmlEncode(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}


//数字补0
function add0(str, length) {
    str += '';
    return new Array(length - str.length + 1).join("0") + str;
}

function dateToStr(date) {
    var d = new Date(date);
    return [d.getFullYear(), add0(d.getMonth() + 1, 2), add0(d.getDate(), 2)].join('');
}
