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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function isIdentical(root,subRoot){
    if(!root &&!subRoot){
        return true;
    }
    else if(root&&subRoot){
       if(root.val===subRoot.val){
            if(isIdentical(root.left,subRoot.left)){
                if(isIdentical(root.right,subRoot.right)){
                    return true;
                }
            }
        } 
    }
    return false;
}
var isSubtree = function(root, subRoot) {
    if(isIdentical(root,subRoot)){
        return true;
    }
    if(root.left){
        if(isSubtree(root.left,subRoot)){
        return true;
        }
    }
    if(root.right){
      if(isSubtree(root.right,subRoot)){
         return true;
        }  
    }
    return false;
};
