// let text = new String("Dhananjay");
// text.reverse = function () {
//   return this.split("").reverse().join("");
// };
// console.log(text.reverse());

//START:INSTANCEONLY
// const anotherText = new String("rats");

// try {
//   console.log(anotherText.reverse());
// } catch (ex) {
//   console.log(ex.message);
// }

//Check the result of this call by running the above code widget.
//Before you learn how to make the method available on all instances of String
//, let’s discuss whether that’s a good idea. You know the answer already: It depends!


//Member injection in the Whole Class\

'use strict';

const text = new String('live');
text.reverse = function () {
    console.log("HIDhananjay")
  };
const anotherText2 = 'rats';
const primitiveText = 'part';

String.prototype.reverse = 
  function() { return this.split('').reverse().join(''); };
console.log(anotherText2.reverse());
console.log(primitiveText.reverse());