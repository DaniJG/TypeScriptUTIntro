/// <reference path="../src/stack.ts" />
/// <reference path="../def/qunit.d.ts" />
QUnit.module("stackTests", {
    setup: function () {
    },
    teardown: function () {
    }
});
test("Pop returns null in a new empty stack", function () {
    var stack = new Stack();
    equal(stack.pop(), null);
});
test("Pop returns last element in a new non-empty stack", function () {
    var stack = new Stack(1, 42);
    equal(stack.pop(), 42);
});
//test("Pop returns last element pushed into the stack", () => {
//    var stack = new Stack<number>(1);
//    stack.push(42);
//    equal(stack.pop(), 42);
//}); 
//# sourceMappingURL=stackTest.js.map