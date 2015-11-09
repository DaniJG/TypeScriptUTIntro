var Stack = (function () {
    function Stack() {
        var initialElements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            initialElements[_i - 0] = arguments[_i];
        }
        this.elements = initialElements;
    }
    Stack.prototype.pop = function () {
        return this.elements.pop();
    };
    return Stack;
})();
//# sourceMappingURL=stack.js.map