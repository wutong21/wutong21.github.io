# 二叉树层序遍历

1. 异常情况 传入节点为空时返回空数组
2. 层序遍历为一层一层从左至右遍历
3. 寄存传入数组root，并定义一个需返回的结果数组

leetcode 102题
```Javascript
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const ret = [] //定义一个返回数组（二维数组）
    if(!root){
        return ret
    }
    let q = [] // 定义传入数组 （二维数组）
    q.push(root) // 将传入节点push进入传入数组
    while(q.length !== 0){
        const size = q.length // size >= 2 即为当前节点有左右子节点
        ret.push([]) // push一个空数组进入返回数组
        for(let i = 1; i<=size; ++i){ 
           const node =  q.shift() // 截取传入节点数组中的第一个值
           ret[ret.length-1].push(node.val) // 将当前节点的值push进入返回数组中的最后一个数组
           if(node.left) { // 有左子节点时push进入传入数组 
               q.push(node.left)
           }
           if(node.right){// 有右子节点时push进入传入数组
               q.push(node.right)
           }
        }
    }
    return ret
};
```