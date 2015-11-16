/// <reference path="../src/stack.ts" />
/// <reference path="../def/qunit.d.ts" />

QUnit.module("stackTests", {
    setup: () => {
    },
    teardown: () => {
    }
});

test("Pop returns null in a new empty stack", () => {
    var stack = new Stack<number>();
    equal(stack.pop(), null);
});

test("Pop returns last element in a new non-empty stack", () => {
    var stack = new Stack<number>(1, 42);
    equal(stack.pop(), 42);
});

//test("Pop returns last element pushed into the stack", () => {
//    var stack = new Stack<number>(1);
//    stack.push(42);
//    equal(stack.pop(), 42);
//});