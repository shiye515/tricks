/**
 * JavaScript快速检测浏览器对CSS3特性的支持
 * @author http://yuguo.us/weblog/detect-css-support-in-browsers-with-javascript/
 * @usage supports('transform') return true||false
 * @demo 
          if (supports('transform')) {
              document.documentElement.className += ' transform';
          }
 */
 
var supports = (function () {
    var div = document.createElement('div'),
        vendors = 'khtml o moz webkit ms'.split(' '),
        len = vendors.length;
    return function (prop) {
        if (prop in div.style) {return true;}
        if ('-ms-' + prop in div.style) {return true;}
        prop = prop.replace(/^[a-z]/, function (val) {
            return val.toUpperCase();
        });
        while (len > 0) {
            len--;
            if ((vendors[len] + prop) in div.style) {
                return true;
            }
        }
        return false;
    };
})();
