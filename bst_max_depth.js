function BST() {
    this.root = undefined;
}
function BSTNode(value) {
    this.value = value;
    this.right = undefined;
    this.left = undefined;
}

BSTNode.prototype.depth = function() {
    if (this.left && this.right) {
        var left = this.left.depth();
        var right = this.right.depth();
        if (left >= right) {
            return left + 1;
        } else {
            return right + 1;
        }
    } else if (this.left) {
        return this.left.depth + 1;
    } else if (this.right) {
        return this.right.depth() + 1;
    } else {
        return 1;
    }
}

BST.prototype.max_depth = function() {
    return this.root.depth();
}

//Test

var my_BST = new BST();
my_BST.root = new BSTNode(10);
my_BST.root.right = new BSTNode(15)
my_BST.root.right.right = new BSTNode(18)
my_BST.root.right.right.right = new BSTNode(30)
my_BST.root.left = new BSTNode(7)

console.log(my_BST.max_depth()); // expected output: 4