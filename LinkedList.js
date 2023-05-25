// interface node{
// data:any,
// next:Node
// }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var ListNode = /** @class */ (function () {
    function ListNode(data) {
        this.data = data;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    // Add Data to node and make a Linked List using head.
    LinkedList.prototype.add = function (data) {
        var newNode = new ListNode(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        var current = this.head;
        while ((current === null || current === void 0 ? void 0 : current.next) !== null) {
            console.log(current);
            current = current.next;
        }
        current.next = __assign({}, newNode);
    };
    return LinkedList;
}());
var list1 = new LinkedList();
list1.add(1);
list1.add(2);
list1.add("omer");
console.log(list1);
