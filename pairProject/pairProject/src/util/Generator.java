package util;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Random;

/**
 * 题目生成类
 * @author cmt&gzq
 */
public class Generator {

    private static final String[] OPERATOR = {"+", "-", "×", "÷"};

    /**
     * 生成题目
     * @param range 题目中数值的范围
     * @return 运算题目
     */
    public static String generate(int range) {
        Random random = new Random();
        // 操作数的数目(2 -> 4)
        int count = random.nextInt(3) + 2;

        List<String> exp = new LinkedList<>();
        for (int i = 0; i < count; i++) {
            exp.add(String.valueOf(random.nextInt(range)));
            if (i != count - 1) {
                exp.add(OPERATOR[random.nextInt(4)]);
            }
        }
        generateBracket(exp);
        return toStr(exp);
    }

    /**
     * 随机生成括号
     * @param exp
     * @return
     */
    public static int generateBracket(List<String> exp){
        Random random = new Random();
        // 是否加括号，有2/5 的概率生成括号
        if(random.nextInt(10) % 3 == 0){
            // todo: 生成的括号数
            List<Integer> numsLocation = new ArrayList<>();
            // 取得 exp 中操作数的位置，操作数的位置为偶数
            for (int i = 0; i < exp.size(); i += 2){
                numsLocation.add(i);
            }
            // 生成左括号，左括号一定在操作数前，且不在最后一个操作数前
            int LBracketLocation = numsLocation.get(random.nextInt(numsLocation.size() - 1));
            exp.add(LBracketLocation, "(");
            // 增加了 "(" 后，在 "(" 后操作数的位置+1，获取 "(" 后操作数的位置
            int j = 0;
            for (int i = 0; i < numsLocation.size(); i++){
                if(LBracketLocation < numsLocation.get(i)){
                    numsLocation.set(j++, numsLocation.get(i) + 1);
                }
            }
            // 生成右括号，右括号要在左括号后、操作数后，且不在第一个操作数后
            int RBracketLocation = numsLocation.get(random.nextInt(j)) + 1;
            exp.add(RBracketLocation, ")");
        }
        return 0;
    }

    /**
     * 将 list<String> 转换为 String 输出
     * @param exp
     * @return
     */
    private static String toStr(List<String> exp){
        StringBuilder sb = new StringBuilder();
        for (String s: exp){
            sb.append(s).append(" ");
        }
        return sb.toString();
    }
}
