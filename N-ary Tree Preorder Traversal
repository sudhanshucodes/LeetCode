/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if(!root){
        return [];
    }
    let stack = [root];
    let pst =[];
    while(stack.length!==0){
        root = stack.pop();
        pst.push(root.val);
        if(root.children){
            let n = root.children.length;
            for(let i = n-1; i>=0; i--){
                stack.push(root.children[i]);
            }   
        }
    }
        return pst;
};
