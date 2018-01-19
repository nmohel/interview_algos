// object definitions
function BST() {
    this.root = undefined;
}
function BSTNode(value) {
    this.value = value;
    this.right = undefined;
    this.left = undefined;
}

// find the max depth of all child nodes by recursively checking the node's left and right
BSTNode.prototype.depth = function() {
    if (this.left && this.right) { 
        // get the max depth for the left and right side
        var left = this.left.depth();
        var right = this.right.depth();

        // compare to see which is bigger and return that value plus itself
        if (left >= right) {
            return left + 1;
        } else {
            return right + 1;
        }
    } else if (this.left) {
        // if there is no right side, max depth must be that of it's left plus itself
        return this.left.depth + 1;
    } else if (this.right) {
        // same as above but for right side
        return this.right.depth() + 1;
    } else {
        // if there is no right or left the max depth is just itself;
        return 1;
    }
}

// Find the max depth of the BST by using the depth method on it's root node
BST.prototype.max_depth = function() {
    return this.root.depth();
}

/* 
// Test BST.max_depth()

var my_BST = new BST();
my_BST.root = new BSTNode(10);
my_BST.root.right = new BSTNode(15)
my_BST.root.right.right = new BSTNode(18)
my_BST.root.right.right.right = new BSTNode(30)
my_BST.root.left = new BSTNode(7)

console.log(my_BST.max_depth()); // expected output: 4
 */