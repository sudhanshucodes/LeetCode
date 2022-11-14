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
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let queue = [root];
    let nodes=[];
    let minDiff=100000;
    while(queue.length!==0){
        root = queue.shift();
        if(nodes.length>=1){
            nodes.forEach((node)=>{
                let currDiff = Math.abs(root.val - node.val);
                minDiff = Math.min(currDiff,minDiff);
            });
        }
        nodes.push(root);
        if(root.left){
            queue.push(root.left);
        }
         if(root.right){
            queue.push(root.right);
        }
    }
    return minDiff;
};
