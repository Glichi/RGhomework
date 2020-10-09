package service;

import java.util.HashSet;
import java.util.Set;
import java.util.Stack;

/**
 * 题目查重类
 * @author cmt&gzq
 */

class TreeNode{
    String value;
    TreeNode left;
    TreeNode right;
}

public class CheckExp {
    private static Stack<TreeNode> nodeStack = new Stack<>();  // 操作数节点栈
    private static Set<TreeNode> expressionDictionary = new HashSet<>();

    public TreeNode createNode(String string) {
        TreeNode node = new TreeNode();
        node.value = string.trim();
        node.left = null;
        node.right = null;
        return node;
    }

    public TreeNode createTree(String[] expression) {
        if(expression.length <= 0) {
            return null;
        }
        for(String string : expression) {
            if(isOperator(string)) {  // 是操作符
                TreeNode symbolNode = createNode(string);
                TreeNode symbolRight = nodeStack.pop();
                symbolNode.left = nodeStack.pop();
                symbolNode.right = symbolRight;
                nodeStack.push(symbolNode);
            } else {  // 操作数
                TreeNode numNode = createNode(string);
                nodeStack.push(numNode);
            }
        }
        return nodeStack.pop();
    }

    /**
     *  遍历词典，可用的存进词典
     * @param expression 后缀表达式
     * @return false-->与词典中的题重复（不可用），true-->不重复（可用）
     */
    public boolean checkDictionary(String[] expression) {
        TreeNode tree = createTree(expression);
        boolean flag = true;
        for(TreeNode node : expressionDictionary) {
            if(treeIsSame(node, tree)) {  // 相同
                flag = false;
                break;
            }
        }
        if(flag) {
            expressionDictionary.add(tree);
        }
        return flag;
    }

    // 判断是否为操作符
    public boolean isOperator(String string) {
        return string.equals("+") || string.equals("-") || string.equals("*") || string.equals("÷") || string.equals("/");
    }

    /**
     *	判断两颗二叉树是否相同 （左子树==左子树，右子树==右子树）
     * @param tree 判断模板
     * @param root 需判断检验的树
     * @return 运算题目
     */
    public boolean treeIsSame(TreeNode tree, TreeNode root) {
        if(tree == null && root == null) {
            return true;
        } else if(tree == null || root == null) {  // 其中一个为空
            return false;
        } else if(tree != null && root !=null) {
            if(!tree.value.equals(root.value)) {  // 结点值不同
                return false;
            } else {  // 结点值相同
                if(tree.left != null && tree.right != null && root.left != null && root.right != null) {
                    if(treeIsSame(tree.left, root.left) && treeIsSame(tree.right, root.right)) {
                        return true;
                    } else {
                        if((tree.value.equals("+") || tree.value.equals("*")) && tree.value.equals(root.value)) {
                            return treeIsSame(tree.left, root.right) && treeIsSame(tree.right, root.left);
                        }
                    }
                } else {
                    return treeIsSame(tree.left, root.left) && treeIsSame(tree.right, root.right);
                }
            }
        }
        return false;
    }

//    // 打印二叉树(先序遍历)
//    public void printTree(TreeNode tree) {
//        if(tree == null) {
//            return ;
//        } else {
//            System.out.print(tree.value + " ");
//            printTree(tree.left);
//            printTree(tree.right);
//        }
//    }
}

