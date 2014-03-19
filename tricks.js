function htmlEncode(str) {
var div = document.createElement("div");
div.appendChild(document.createTextNode(str));
return div.innerHTML;
}
