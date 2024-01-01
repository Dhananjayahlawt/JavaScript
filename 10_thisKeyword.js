// const ayush={
//     name:"Ayush",
//     greet:function greet(){
//         console.log(`Hello ${this.name}`);//this bound to the object/Function is called on
//     }
// }
// ayush.greet(); //Print Hello Ayush;

// const Ayush = {
//   name: "Ayush",
//   friend: {
//     greet: function greet() {
//       console.log(`Hello ${this.name}`);
//     },
//   },
// };
// Ayush.friend.greet();//It prints undefined as this is bound object friends

// const Ayush = {
//   name: "Ayush",
//   friend: {
//     name: "Pranav",
//     greet: function greet() {
//       console.log(`Hello ${this.name}`);
//     },
//   },
// };
// Ayush.friend.greet();// Prints Hello Pranav because ths bound to the calinf object

// function greet(){
//     this.name="Yush"
//     console.log(this)//this map to the curent context
// }
// console.log(this)//this map to the global this as globla is the current context of this.
// greet();

/////V.IMp************************************************
// const ayush={
//     name:"Ayush",
//     greet:()=>{
//         console.log(`Hello ${this.name}`);//this bound to the object/Function is called on
//     }
// }
// this.name="Pranav"
// ayush.greet();//NOw this in arrow fucntion bund to the current surrounding context not current context

// const ayush={
//     name:"Ayush",
//     greet:function (){
//         console.log(`Hello ${this.name}`);//this bound to the object/Function is called on
//     }
// }
// this.name="Pranav"
// ayush.greet()

// const ayush = {
//   name: "Ayush",
//   greet: function(a,b){
//     console.log(`a:${a},b:${b}`)
//     console.log(`Hello ${this.name}`);
//   },
// };

// ayush.greet.call({name:"Dhananjay"},"hello",100);
// ayush.greet.apply({name:"Dhananjay"},["hello",100])// Th eonly differnce between call ana apply is only thepasing of paraetrsis that

// const student={
//     name:"Anjali",
//     friend:{
//     name:"Ayushi",
//     greet:function(){
//         console.log(`hi ${this.name}`)
//     }
//    }
// }
// let boundGreet=student.friend.greet.bind({name:"Tania"});
// boundGreet();

// function student(name){
//     this.name=name,
//     this.age=16;
//     this.greet=function(){
//       console.log(this);
//       console.log(this.age);
//       console.log(`hi ${this.name}`)
//     }
// }
// let dhananjay=new student("Dhananjay");
// dhananjay.greet();
// dhananjay.greet.call({name:"anjali"});

// let object={
//     name:"Pranav"
// }
// Object.prototype.greet=function(){
//     console.log(`hi ${this.name}`)
// }
// object.greet()

const iphone = {
  name: "Iphone 15",
  year: 2020,
  color: "Red",
  category: "Mobile",
  wishlist: () => {
    console.log("111111111", this);
  },
};

const macbook = {
  name: "macbook Pro",
  year: 2020,
  color: "Red",
  category: "Laptop",
  wishlist: function () {
    console.log("111111111", this);
  },
};

const products = {
  name: "Iphone 15",
  year: 2020,
  color: "Red",
  category: "Mobile",
  display: function () {
    let product = {
      name: "Iphone 15",
      year: 2020,
      color: "Red",
      category: "Mobile",
      display: () => {
        console.log(this);
      },
    };
  },
};
iphone.wishlist();
