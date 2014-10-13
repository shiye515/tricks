//htmlEncode

function htmlEncode(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

//htmlDecode

function htmlDecode(s) {
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

//解析url

function parseURL(url) {
    var a = document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':', ''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function () {
            var ret = {},
                seg = a.search.replace(/^\?/, '').split('&'),
                len = seg.length,
                i = 0,
                s;
            for (; i < len; i++) {
                if (!seg[i]) {
                    continue;
                }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
        hash: a.hash.replace('#', ''),
        path: a.pathname.replace(/^([^\/])/, '/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
        segments: a.pathname.replace(/^\//, '').split('/')
    };
}

//数字取整 |0 或者 ~~

(12.4 / 4.13) | 0; //结果为3
~~(12.4 / 4.13); //结果为3
