/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root){
        return 0;
    }
    let max = 1;
    if(root.children){
        for(let i =0; i<root.children.length; i++){
            let depth = maxDepth(root.children[i]);
            max = Math.max(depth+1,max);
        }
    }
    return max;
};
