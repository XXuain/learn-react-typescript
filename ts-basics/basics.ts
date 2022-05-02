/**
 * Primitives: number, string, boolean (lowercase)
 * More complex types:  arrays[], objects{}
 * Function types, parameters
 */

/**
 * Primitives
 */
let age: number = 29;
age = 9;

let userName: string;
userName = 'yellow';

let isInstructor: boolean;
isInstructor = true;

/**
 * More complex types
 */
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

let person: { name: string; age: number };
person = { name: 'Yellow', age: 29 };

// Type Aliases
type Person = { name: string; age: number };
let people: Person[]; // { name: string; age: number }[];

/**
 * Type inference
 */
let inference1 = 'learn-react';
inference1 = 'is string';

let inference2: string | number = 'learn-react';
inference2 = 123;

/**
 * Function types, parameters
 */
function add(a: number, b: number) {
  return a + b;
}

// no return func, return type is void(like null & undefined)
function printOutput(value: any) {
  console.log(value);
}

/**
 * Generics 泛型
 * - 轉換函示型別
 */
function insertAtBeginning(array: any[], value: any) {
  return [value, ...array];
}
const demoBeginnerArr = [1, 2, 3];
const updateDemoBeginnerArr = insertAtBeginning(demoBeginnerArr, -1);

// because updateDemoArr type is any, updateDemoArr[0].split('') >> get runtime err
// to fix it
function insertAtLaster<T>(array: T[], value: T) {
  return [...array, value];
}
const demoLastArr1 = [1, 2, 3];
const updateDemoLastArr1 = insertAtLaster(demoLastArr1, -1); // type is > number[]

const demoLastArr2 = ['1', '2', '3'];
const updateDemoLastArr2 = insertAtLaster(demoLastArr2, '-1'); // type is > string[]
const updateDemoLastArr3 = insertAtLaster<string>(demoLastArr2, '-1'); // type is > string[]

// Array type
let numbers1 = [1, 2, 3];
let numbers2: number[] = [1, 2, 3]; // number[] is just syntactic sugar!
let numbers3: Array<number> = [1, 2, 3];
