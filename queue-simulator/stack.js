
class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // Add element to top of stack
    push(element) {
        this.items[this.count] = element;
        this.count++;

        return element;
    }

    // Remove top element from stack
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }

        let deleteItem = this.items[this.count - 1];

        this.items.pop();
        this.count--;

        return deleteItem;
    }

    // Check top element
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.count - 1];
    }

    // Check if stack is empty
    isEmpty() {
        return this.count === 0;
    }

    // Check size of stack
    size() {
        return this.count;
    }

    // Print elements
    print() {
        return this.items.join(' ');
    }

    // Clear stack
    clear() {
        this.items = [];
        this.count = 0;

        return this.items;
    }
}

const stack = new Stack();

$(document).ready(function () {

    function displayStack() {
        $("#stack").empty();

        for (let i = stack.count - 1; i >= 0; i--) {
            let block = $("<div>")
                .addClass("row push")
                .addClass(i === stack.count - 1 ? "bg-success" : "bg-primary")
                .text(stack.items[i]);

            if (i === stack.count - 1) {
                block.addClass("top-element");
            }

            $("#stack").append(block);
        }
    }

    // Push button
    $("#push").click(function () {
        let value = $("#data").val().trim();

        if (value === "") {
            alert("Please enter a value.");
            return;
        }

        stack.push(value);
        $("#data").val("");

        displayStack();
    });

    // Pop button
    $("#pop").click(function () {
        let removed = stack.pop();

        if (removed === undefined) {
            alert("Stack is empty. Nothing to remove.");
            return;
        }

        $("#deleted").prepend(
            $("<div>")
                .addClass("row pop text-bg-danger border border-light")
                .text(removed)
        );

        displayStack();
    });

    // Peek button
    $("#peek").click(function () {
        let top = stack.peek();

        if (top === undefined) {
            alert("Stack is empty. Nothing to peek.");
            return;
        }

        displayStack();

        $(".top-element").addClass("highlight");
    });

    // Clear button
    $("#clear").click(function () {
        stack.clear();

        $("#stack").empty();
        $("#deleted").empty();
        $("#data").val("");
    });

});
