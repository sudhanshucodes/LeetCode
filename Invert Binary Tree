/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root){
        return root;
    }
   let q = [root];
    while(q.length!==0){
        let currNode = q.shift();
        if(currNode.left){
            q.push(currNode.left);
        }
        if(currNode.right){
            q.push(currNode.right);
            let right = currNode.right;
        }
        let left = currNode.left;
        currNode.left = currNode.right;
        currNode.right = left;
    }
    return root;
};
