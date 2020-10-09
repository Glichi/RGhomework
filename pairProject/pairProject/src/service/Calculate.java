package service;

import entity.Fraction;
import util.RPN;

import java.util.*;

/**
 * 算数运算类
 * @author cmt&gzq
 */
public class Calculate {

    /**
     * 四则运算
     * @param exp 后缀表达式
     * @return 运算结果
     */
    public String calculate(String exp){
        Stack<String> elemStack = new Stack<>();
        for(String s: exp.split(" ")){
            if(RPN.OP_WEIGHT.containsKey(s)){
                // 为运算符，取出栈顶的两个元素计算并将结果压入栈
                String result;
                String firstElem = elemStack.pop();
                String nextElem = elemStack.pop();
                if(isFraction(firstElem) || isFraction(nextElem)){
                    result = fractionArithmetic(strToFraction(nextElem), strToFraction(firstElem), s);
                }else {
                    // 两个元素都是整数
                    result = intArithmetic(Integer.parseInt(nextElem), Integer.parseInt(firstElem), s);
                }
                // 表达式不规范
                if(result.equals("-1")) {
                    elemStack.clear();
                    return "error";
                }
                // 运算结果入栈顶
                elemStack.push(result);
            }else{
                // 为操作数，入栈
                elemStack.push(s);
            }
        }
        return elemStack.pop();
    }

    /**
     * 判断字符串是整数还是分数
     * 依据：字符串中是否包含"/"
     * @param s
     * @return
     */
    private boolean isFraction(String s){
        return s.contains("/");
    }

    /**
     * 将字符串化为分数
     * @param s 字符串，如"3/5", "2'3/8", "2"
     * @return
     */
    public Fraction strToFraction(String s){
        int numerator, denominator;
        if (s.contains("'")){
            // 带分数
            denominator = Integer.parseInt(s.split("/")[1]);
            String[] split = s.split("/")[0].split("'");
            numerator = Integer.parseInt(split[0]) * denominator + Integer.parseInt(split[1]);
        }else if(s.contains("/")){
            // 真分数
            numerator = Integer.parseInt(s.split("/")[0]);
            denominator = Integer.parseInt(s.split("/")[1]);
        }else{
            // 整数
            numerator = Integer.parseInt(s);
            denominator = 1;
        }
        return new Fraction(numerator, denominator);
    }

    /**
     * 整数的加减乘除运算
     * @param num1 操作数1
     * @param num2 操作数2
     * @param operator 运算符
     * @return 如果返回结果为-1，则表示输入的表达式不规范
     */
    public String intArithmetic(int num1, int num2, String operator){
        int result = -1;
        switch (operator){
            case "+":
                result = num1 + num2;
                break;
            case "-":
                if(num1 >= num2){
                    result = num1 - num2;
                }
                break;
            case "×":
                result = num1 * num2;
                break;
            case "÷":
            default:
                // 分母不能为0
                if(num2 == 0) return String.valueOf(-1);
                if(num1 % num2 == 0){
                    result = num1 / num2;
                }else {
                    return new Fraction(num1, num2).toString();
                }

        }
        return String.valueOf(result);
    }


    /**
     * 分数的加减乘除运算
     * @param fraction1 分数1
     * @param fraction2 分数2
     * @param operator 操作符
     * @return 如果返回结果为-1，则表示输入的表达式不规范
     */
    public String fractionArithmetic(Fraction fraction1, Fraction fraction2, String operator){
        // 获取分数的分子、分母
        int fraction1Numerator = fraction1.getNumerator();
        int fraction1Denominator = fraction1.getDenominator();
        int fraction2Numerator = fraction2.getNumerator();
        int fraction2Denominator = fraction2.getDenominator();
        // 新分数的分子、分母
        int newNumerator, newDenominator;
        switch (operator){
            case "+":
                newNumerator = fraction1Numerator * fraction2Denominator + fraction2Numerator * fraction1Denominator;
                newDenominator = fraction1Denominator * fraction2Denominator;
                break;
            case "-":
                // 计算过程不能产生负数
                if((newNumerator = fraction1Numerator * fraction2Denominator - fraction2Numerator * fraction1Denominator) < 0){
                    return String.valueOf(-1);
                }else{
                    newDenominator = fraction1Denominator * fraction2Denominator;
                }
                break;
            case "×":
                newNumerator = fraction1Numerator * fraction2Numerator;
                newDenominator = fraction1Denominator * fraction2Denominator;
                break;
            case "÷":
            default:
                newNumerator = fraction1Numerator * fraction2Denominator;
                newDenominator = fraction1Denominator * fraction2Numerator;
                // 分母不能为0
                if(newDenominator == 0) return String.valueOf(-1);
        }

        // 运算结果为整数
        if(newNumerator % newDenominator == 0){
            return String.valueOf(newNumerator / newDenominator);
        }
        return new Fraction(newNumerator, newDenominator).toString();
    }

}
