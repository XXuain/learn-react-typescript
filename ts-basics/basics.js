/**
 * Primitives: number, string, boolean (lowercase)
 * More complex types:  arrays[], objects{}
 * Function types, parameters
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * Primitives
 */
var age = 29;
age = 9;
var userName;
userName = 'yellow';
var isInstructor;
isInstructor = true;
/**
 * More complex types
 */
var hobbies;
hobbies = ['Sports', 'Cooking'];
var person;
person = { name: 'Yellow', age: 29 };
var people; // { name: string; age: number }[];
/**
 * Type inference
 */
var inference1 = 'learn-react';
inference1 = 'is string';
var inference2 = 'learn-react';
inference2 = 123;
/**
 * Function types, parameters
 */
function add(a, b) {
    return a + b;
}
// no return func, return type is void(like null & undefined)
function printOutput(value) {
    console.log(value);
}
/**
 * Generics 泛型
 * - 轉換函示型別
 */
function insertAtBeginning(array, value) {
    return __spreadArray([value], array, true);
}
var demoBeginnerArr = [1, 2, 3];
var updateDemoBeginnerArr = insertAtBeginning(demoBeginnerArr, -1);
// because updateDemoArr type is any, updateDemoArr[0].split('') >> get runtime err
// to fix it
function insertAtLaster(array, value) {
    return __spreadArray(__spreadArray([], array, true), [value], false);
}
var demoLastArr1 = [1, 2, 3];
var updateDemoLastArr1 = insertAtLaster(demoLastArr1, -1); // type is > number[]
var demoLastArr2 = ['1', '2', '3'];
var updateDemoLastArr2 = insertAtLaster(demoLastArr2, '-1'); // type is > string[]
var updateDemoLastArr3 = insertAtLaster(demoLastArr2, '-1'); // type is > string[]
// Array type
var numbers1 = [1, 2, 3];
var numbers2 = [1, 2, 3]; // number[] is just syntactic sugar!
var numbers3 = [1, 2, 3];
