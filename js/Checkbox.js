(function(global,factory){
    "use strict";
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    // Browser globals (root is window)
    global.Checkbox = factory(root.jQuery);
  }
})(this,function($,undefined){
    // our public object; augmented after our private API\
    var template = {
        root:"<div></div>",
        
    };
    function Checkbox(){
        this.root = getElement(template.root);
    }


    /**
     * 首字母转小写
     */
    function lcfirst(str) { 
        return str.replace(/\b\w+\b/g, function (word) {
            return word.substring(0, 1).toLowerCase() + word.substring(1);
        });
    }

    /**
     * 首字母转大写
     */
    function ucfirst(str) {
        return str.replace(/\b\w+\b/g, function (word) {
            return word.substring(0, 1).toUpperCase() + word.substring(1);
        });
    }

    /**
     * 将html字符串转化为dom元素
     */
    function getElement(str) {
        var div = document.createElement("div");
        div.innerHTML = str ? str : "<div></div>";
        return div.children[0];
    }

    return Checkbox;
});