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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let averages = [];
    let queue = [root,null];
    var sum = 0;
    var count = 0;
    while(queue.length !== 0){
        root = queue.shift();
        sum += root.val;
        count++;
        if(root.left){
            queue.push(root.left);
        }
        if(root.right){
            queue.push(root.right);
        }
        let next = queue[0];
        if(!next){
           let average = sum/count;
            averages.push(average);
            queue.shift();
            sum = 0;
            count = 0;
            if(queue.length > 0){
                queue.push(null);
            }
        }
    }
    return averages;
};
