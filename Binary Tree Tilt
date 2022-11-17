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
function Sum(root){
    if(!root){
        return 0 ;
    }
    let sum =root.val;
    if(root.left){
        sum+=Sum(root.left);
    }
    if(root.right){
        sum+=Sum(root.right);
    }
    return sum;
}
var findTilt = function(root) {
    let tilt =0;
    if(!root){
        return tilt;
    }
    if(!root.left&&!root.right){
        return tilt;
    }
    tilt += Math.abs(Sum(root.left)-Sum(root.right)) + findTilt(root.left)+findTilt(root.right);
    return tilt
};
