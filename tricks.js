function htmlEncode(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}
function htmlDecode(s){  
    var div = document.createElement('div');  
    div.innerHTML = s;  
    return div.innerText || div.textContent;  
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

//对象深复制
var cloneObj = JSON.parse(JSON.stringify(obj));

//编码转换（to Unicode）

function toUnicode(string) {
    str = ""
    for (i = 0; i < string.length; i++) {
        temp = string.charCodeAt(i).toString(16);
        str += "\\u" + new Array(5 - String(temp).length).join("0") + temp;
    }
    return str;
}
