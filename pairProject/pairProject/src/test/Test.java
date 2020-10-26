package test;

import entity.Fraction;
import service.Calculate;
import util.Generator;
import util.MyFile;
import util.RPN;

public class Test {

    private Calculate calculate = new Calculate();

    /**
     * 测试生成题目
     */
    @org.junit.Test
    public void testGenerator(){
        System.out.println(Generator.generate(5));
    }

    /**
     * 测试写入文件
     */
    @org.junit.Test
    public void testWriteFile(){
        MyFile.write("Exercises.txt", Generator.generate(10));
    }

    /**
     * 测试整数四则运算
     */
    @org.junit.Test
    public void testIntArithmetic(){
        int num1, num2;
        num1 = 1; num2 = 3;
        String operator = "÷";
        String s = calculate.intArithmetic(num1, num2, operator);
        System.out.println(num1 + " " + operator + " " + num2 + " = " + s);
    }

    /**
     * 测试分数四则运算
     */
    @org.junit.Test
    public void testFractionArithmetic(){
        Fraction fraction1 = new Fraction(1, 2);
        Fraction fraction2 = new Fraction(1, 2);
        String operator = "÷";
        String s = calculate.fractionArithmetic(fraction1, fraction2, operator);
        System.out.println(fraction1.toString() + " " + operator + " " + fraction2.toString() + " = " + s);
    }

    /**
     * 测试将中缀表达式转换为后缀表达式
     */
    @org.junit.Test
    public void testToRPN(){
        String exp = "8 × ( 5 ÷ 7 )";
        System.out.println("后缀表达式：" + RPN.toRPN(exp));
    }

    /**
     * 测试将字符串转换为分数
     */
    @org.junit.Test
    public void testStrToFraction(){
        String s = "2'3/8";
        Fraction fraction = calculate.strToFraction(s);
        System.out.println("分子：" + fraction.getNumerator());
        System.out.println("分母：" + fraction.getDenominator());
    }

    /**
     * 测试四则运算
     */
    @org.junit.Test
    public void testCalculate(){
        // 8 5
        String exp = "8 × ( 5 ÷ 7 × 7 )";
        String s = RPN.toRPN(exp);
        System.out.println("后缀表达式：" + s);
        System.out.println("运算结果：" + calculate.calculate(s));
    }

}
