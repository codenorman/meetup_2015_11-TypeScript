var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// ***********************
// types
//if (false) {
if (true) {
    console.log('Types');
    var n = 1;
    var isValid = true;
    var apiKey = "0E5CE8DB";
    var a = 44;
    console.log('  A (44) is a number');
    console.log('  results: ', n, isValid, apiKey, a);
    console.log('  Change A to string (Hello)');
    a = "Hello";
    //n = "ABC";  // *** Typescript ERRROR: Can't change a number to string type
    console.log('  results: ', n, isValid, apiKey, a);
}
// ***********************
// Type gaurds
//if (false) {
if (true) {
    console.log('Type Guards');
    var a;
    a = "hello";
    if (typeof a === "string") {
        console.log('   ', a);
    }
    a = 42;
    if (typeof a === "number") {
        a += 1;
        console.log('   ', a);
    }
}
// ***********************
// const
if (false) {
    //if (true) {
    console.log('Const');
    var PI = "Apple is the best";
    //PI = "3.14159";  // *** Typescript ERRROR can't change a constant
    console.log("   const PI = " + PI);
}
// ***********************
// var hoisting
//if (false) {
if (true) {
    console.log('Var Hoisting');
    var x = 10;
    function testVar() {
        console.log('  ', x); // undefined - Javascript hoists var x in if block to the top of function scope
        if (true) {
            var x = 32;
            console.log('  ', x); // 32
        }
    }
    testVar();
}
//// let scope
//if (false) {
if (true) {
    console.log('Let');
    var x = 10;
    function testLet() {
        console.log('  ', x);
        if (true) {
            var x_1 = 32; // let has block scope, definition only exists in if block
            console.log('  ', x_1);
        }
        console.log('   ***', x); // x will be global x (10)
    }
    testLet();
}
//// enums
//if (false) {
if (true) {
    console.log('enums');
    // set Sunday = 3
    // enum defaults to start at 0 & increments by 1
    var Days;
    (function (Days) {
        Days[Days["Sunday"] = 0] = "Sunday";
        Days[Days["Monday"] = 1] = "Monday";
        Days[Days["Tuesday"] = 2] = "Tuesday";
        Days[Days["Wednesday"] = 3] = "Wednesday";
        Days[Days["Thursday"] = 4] = "Thursday";
        Days[Days["Friday"] = 5] = "Friday";
        Days[Days["Saturday"] = 6] = "Saturday";
    })(Days || (Days = {}));
    ;
    // enum Days {Sunday = 4, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday}; // Saturday will be 10
    var itsFriday = Days.Friday;
    console.log('   Friday:', itsFriday);
    console.log('   Saturday:', Days.Saturday);
}
// interfaces
// An interface is a contract that is required to be followed
//var showInterface = false;
var showInterface = true;
// displayPerson takes a parameter of person defined as Person interface
// it must contain firstName & lastName as defined by interface contract
// it can contain other details
function displayPerson(person) {
    return "Member: " + person.firstName + " " + person.lastName;
}
// john is defined as Person (Must contain firstName & lastName as defined by interface contract)
var john = { firstName: "John", lastName: "Doe" };
// Brian has firstName, middleName and lastName
// it an be passed to displayPerson as it meets the interface contract requirements
// It also meets PersonFull requirements
var Brian = { firstName: "Brian", middleName: "Thomas", lastName: "Chirgwin" };
if (showInterface) {
    console.log('Interfaces');
    console.log('  john:', displayPerson(john));
    //console.log ('  person2:', displayPerson(person2)); // ERROR
    console.log('  Fullname:', displayPerson(Brian));
    console.log('  MiddleName:', Brian.middleName);
}
// Class
// Show autocomplete
//
//var showClass = false;
var showClass = true;
var Member = (function () {
    function Member(firstName, lastName, middleName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
    }
    return Member;
})();
var member = new Member("Brian", "Chirgwin", "Thomas");
if (showClass) {
    console.log('Classes');
    console.log('  ', member);
    console.log('  ', member.firstName);
}
// extend Class
var Organizer1 = (function (_super) {
    __extends(Organizer1, _super);
    function Organizer1(firstName, lastName, middleName, group) {
        _super.call(this, firstName, lastName, middleName);
        this.group = group;
    }
    return Organizer1;
})(Member);
var organizer = new Organizer1("Brian", "Chirgwin", "Thomas", "Code Norman");
if (showClass) {
    console.log('   ', organizer);
}
// Union Types
//if (false) {
if (true) {
    console.log('Union Types');
    var Organizer2 = (function (_super) {
        __extends(Organizer2, _super);
        function Organizer2(firstName, lastName, middleName) {
            var groups = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                groups[_i - 3] = arguments[_i];
            }
            _super.call(this, firstName, lastName, middleName);
            this._groups = groups;
        }
        return Organizer2;
    })(Member);
    var johnQ = new Organizer2("John", "Public", "Q", "OKCJS");
    console.log(johnQ);
    var bob = new Organizer2("Bob", "Smith", "R", "OKCJS", "Code Norman");
    console.log(bob);
}
// default values
//if (false) {
if (true) {
    console.log('Default Values');
    function add(n1, n2) {
        if (n1 === void 0) { n1 = 50; }
        if (n2 === void 0) { n2 = 100; }
        return n1 + n2;
    }
    console.log('   ', add(1, 1));
    console.log('   ', add(1));
    console.log('   ', add());
}
// type aliasing
//if (false) {
if (true) {
    console.log('Type Aliasing');
    function foo(n1) {
        console.log('  ', n1);
    }
    var num = 42;
    var n2 = 33;
    console.log('   ', num);
    // n2 of type number can be passed to a function that takes an alias for number (MyNumber)
    foo(n2);
}
// Static Members
//if (false){
if (true) {
    console.log('Static Members');
    var Items = (function () {
        function Items() {
            this._items = [];
        }
        // _count is static for the Class. Only one _count exists for all objects created from class
        Items.prototype.add = function (item) {
            Items._count += 1; // Items._count = Items._count + 1
            this._items.push(item);
        };
        Items.prototype.count = function () {
            return Items._count;
        };
        Items._count = 0;
        Items.h = 'Hello';
        return Items;
    })();
    var items = new Items(); // Items Object created assigned to items
    items.add("Bob"); // add _Items = 1
    items.add("John"); // add _Items = 2
    items.add("Brian"); // add _Items = 3
    var items2 = new Items();
    items2.add("Bob"); // add _Items = 4
    items2.add("John"); // add _Items = 5
    items2.add("Brian"); // add _Items = 6
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
