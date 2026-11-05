
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        this.items.push(value);
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    clear() {
        this.items = [];
    }
}

const queue = new Queue();

$(document).ready(function () {

    function displayQueue() {
        $("#queue-items").empty();

        queue.items.forEach(function (item, index) {
            const block = $("<div>")
                .addClass("queue-item")
                .text(item);

            if (index === 0) {
                block.addClass("front-element");
            }

            $("#queue-items").append(block);
        });
    }

    // ENQUEUE: Add an item to the rear
    $("#enqueue").click(function () {
        const value = $("#data").val().trim();

        if (value === "") {
            alert("Please enter a value first.");
            return;
        }

        queue.enqueue(value);
        $("#data").val("");
        displayQueue();
    });

    // DEQUEUE: Remove an item from the front
    $("#dequeue").click(function () {
        const removed = queue.dequeue();

        if (removed === undefined) {
            alert("The queue is empty. Nothing to dequeue.");
            return;
        }

        $("#deleted").prepend(
            $("<div>").addClass("deleted-item").text(removed)
        );

        displayQueue();
    });

    // PEEK: Show the front item without removing it
    $("#peek").click(function () {
        if (queue.isEmpty()) {
            alert("The queue is empty. Nothing to peek.");
            return;
        }

        displayQueue();
        $(".front-element").addClass("highlight");
    });

    // CLEAR: Empty the queue and deleted area
    $("#clear").click(function () {
        queue.clear();
        $("#deleted").empty();
        $("#data").val("");
        displayQueue();
    });

});
