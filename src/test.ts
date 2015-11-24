// ***********************
// types
//if (false) {
if (true) {
    console.log ('Types')
    var n:number = 1;
    let isValid:boolean = true;
    const apiKey:string = "0E5CE8DB";
    var a:any = 44;

    console.log ('  A (44) is a number');
    console.log ('  results: ', n, isValid, apiKey, a);
    console.log ('  Change A to string (Hello)');
    a = "Hello";
    //n = "ABC";  // *** Typescript ERRROR: Can't change a number to string type
    console.log ('  results: ', n, isValid, apiKey, a);
}

// ***********************
// Type gaurds
//if (false) {
if (true) {
    console.log ('Type Guards')
    var a:any;
    a = "hello";
    if (typeof a === "string") {
        console.log('   ', a);
        // console.log(a.join(", "); // Typescript ERROR if block requires string
    }
    a = 42;
    if (typeof a === "number") {
        a += 1
        console.log('   ', a);
    }
}


// ***********************
// const
if (false) {
//if (true) {
    console.log ('Const')

    const PI = "Apple is the best";
    //PI = "3.14159";  // *** Typescript ERRROR can't change a constant
    console.log("   const PI = " + PI);
}

// ***********************
// var hoisting
//if (false) {
if (true) {
    console.log ('Var Hoisting')

    var x = 10;

    function testVar() {
        console.log ('  ', x);  // undefined - Javascript hoists var x in if block to the top of function scope
        if (true) {
            var x = 32;
            console.log ('  ', x);  // 32
        }
    }

    testVar();

    // How Javascript process above
    //var x;
    //x = 10;
    //
    //function testVar(){
    //    var x;
    //    console.log (x);  // x is undefined, no value assigned
    //    x = 32;
    //    console.log (x);
    //
    //}
    //testVar();

}


//// let scope
//if (false) {
if (true) {
    console.log ('Let')
    var x = 10;

    function testLet() {
        console.log ('  ', x);

        if (true) {
            let x = 32;     // let has block scope, definition only exists in if block
            console.log ('  ', x);
        }
        console.log('   ***', x) // x will be global x (10)
    }

    testLet();

    // NOTE: It is better to use different variable names for globals and function

}

//// enums
//if (false) {
if (true) {
    console.log ('enums')

    // set Sunday = 3
    // enum defaults to start at 0 & increments by 1
    enum Days {Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday}
    ;
    // enum Days {Sunday = 4, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday}; // Saturday will be 10

    var itsFriday:Days = Days.Friday;
    console.log('   Friday:', itsFriday);
    console.log('   Saturday:', Days.Saturday);
}

// interfaces
// An interface is a contract that is required to be followed

//var showInterface = false;
var showInterface = true;

interface Person {

    firstName: string;
    lastName: string;
    //age: number;  // adding age to interface will break the contract in uses below. Updates will be required
}

// displayPerson takes a parameter of person defined as Person interface
// it must contain firstName & lastName as defined by interface contract
// it can contain other details
function displayPerson(person:Person) {
    return "Member: " + person.firstName + " " + person.lastName;
}

// john is defined as Person (Must contain firstName & lastName as defined by interface contract)
var john:Person = {firstName: "John", lastName: "Doe"};

// extend interface
interface PersonFull extends Person {
    // firstName: string; defined in Person as PersonFull extends persons
    // lastName: string; defined in Person as PersonFull extends persons
    middleName: string;
}

// Brian has firstName, middleName and lastName
// it an be passed to displayPerson as it meets the interface contract requirements
// It also meets PersonFull requirements

var Brian = {firstName: "Brian", middleName: "Thomas", lastName: "Chirgwin"};

if (showInterface) {
    console.log ('Interfaces')
    console.log ('  john:', displayPerson(john));

    //console.log ('  person2:', displayPerson(person2)); // ERROR
    console.log ('  Fullname:', displayPerson(Brian));
    console.log ('  MiddleName:', Brian.middleName);
}


// Class
// Show autocomplete
//
//var showClass = false;
var showClass = true;

class Member implements PersonFull {
    constructor(public firstName, public lastName, public middleName) {
    }
}

var member = new Member("Brian", "Chirgwin", "Thomas");
if (showClass) {
    console.log('Classes')
    console.log ('  ', member)
    console.log ('  ', member.firstName);
}


// extend Class
class Organizer1 extends Member {
    group:string;

    constructor(firstName, lastName, middleName, group) {
        super(firstName, lastName, middleName);
        this.group = group;
    }
}

var organizer:Organizer1 = new Organizer1("Brian", "Chirgwin", "Thomas", "Code Norman");
if (showClass) {
    console.log('   ', organizer);
}


// Union Types
//if (false) {
if (true) {
    console.log('Union Types')
    class Organizer2 extends Member {
        _groups:string | string[];

        constructor(firstName:string, lastName:string, middleName:string, ...groups) {
            super(firstName, lastName, middleName);
            this._groups = groups
        }
    }
    var johnQ:Organizer2 = new Organizer2("John", "Public", "Q", "OKCJS");
    console.log(johnQ);

    var bob:Organizer2 = new Organizer2("Bob", "Smith", "R", "OKCJS", "Code Norman")
    console.log(bob);

}

// default values
//if (false) {
if (true) {
    console.log ('Default Values')
    function add(n1:number = 50, n2:number = 100) {

        return n1 + n2;

    }

    console.log('   ', add(1, 1));
    console.log('   ', add(1));
    console.log('   ', add());
}

// type aliasing
//if (false) {
if (true) {
    console.log('Type Aliasing')

    type MyNumber = number;

    function foo(n1:MyNumber) {

        console.log ('  ', n1)
    }

    var num:MyNumber = 42;
    var n2:number = 33;
    console.log('   ', num);
    // n2 of type number can be passed to a function that takes an alias for number (MyNumber)
    foo(n2);
}

// Static Members
//if (false){
if (true) {
    console.log ('Static Members')
    class Items {
        static _count = 0;
        static h = 'Hello';
        _items:string[] = [];

        constructor() {

        }

        // _count is static for the Class. Only one _count exists for all objects created from class
        add(item:string) {
            Items._count += 1; // Items._count = Items._count + 1
            this._items.push(item);
        }

        count() {
            return Items._count;
        }
    }

    var items = new Items();    // Items Object created assigned to items
    items.add("Bob");           // add _Items = 1
    items.add("John");          // add _Items = 2
    items.add("Brian");         // add _Items = 3
    var items2 = new Items();
    items2.add("Bob");          // add _Items = 4
    items2.add("John");         // add _Items = 5
    items2.add("Brian");        // add _Items = 6

    console.log("   Count: ", items.count());

}


//// TODO:
//// Lambdas
//// Decorators & Generics
//// @readonly
//// class Person {
////    name: string;
////    isAdmin: boolean;
////
////    constructor (public name, public admin){
////        this.name = name;
////        this.isAdmin = admin;
////    }
//// }
////
//// function readonly<TFunction extends Function> ( Target: TFunction):TFunction {
////    let newConstructor = function(){
////        Target.apply(this);
////        Object.freeze(this);
////    }
////
////    newConstructor.prototype = Object.create(Target.prototype);
////    newConstructor.prototype.constructor = Target;
////
////    return <any> newConstructor;
////}