/*
var bar = null;
console.log(typeof bar === "object");  // logs true!

console.log((bar !== null) && (typeof bar === "object"));  // logs false

console.log((bar !== null) && ((typeof bar === "object") || (typeof bar === "function")));

console.log((bar !== null) && (typeof bar === "object") && (toString.call(bar) !== "[object Array]"));

console.log((bar !== null) && (bar.constructor === Object));

console.log(Array.isArray(bar));
*/

/*
(function(){
    var a = b = 3;
})();
  
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
*/

/* (function(){
    let a = b = 3;
})();
  
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
 */

/* var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func(); */

/* (function($) { 
    function teste() {
        console.log('teste');
    }

})(jQuery);

$.teste();
 */

/* function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

console.log("foo1 returns:");
console.log(foo1());
console.log("foo2 returns:");
console.log(foo2());
 */


 



