import service.Calculate;
import service.CheckAnswer;
import service.CheckExp;
import util.Generator;
import util.MyFile;
import util.RPN;

import java.util.Scanner;

public class Main {

    /**
     * 主函数
     * @param args 如果args为空，那么表示生成题目和答案文件；
     *             如果args不为空（-e <exerciseFile>.txt -a <answerFile>.txt），则表示将用户文件和答案文件进行比对。
     */
    public static void main(String[] args) {
        if(args.length == 0) {
            Scanner sc = new Scanner(System.in);
            System.out.print("请输入生成题目的个数：");
            int num = sc.nextInt();
            System.out.print("题目中数值（自然数、真分数和真分数分母）的范围：");
            int range = sc.nextInt();
            sc.close();

            // 清空Exercises.txt,Answers.txt的内容
            MyFile.clear("Exercises.txt");
            MyFile.clear("Answers.txt");

            Calculate calculate = new Calculate();
            CheckExp checkExp = new CheckExp();
            // 序号
            int order = 1;
            while (num > 0) {
                // 生成题目
                String question = Generator.generate(range);
                // 将题目转为后缀表达式
                String rpn = RPN.toRPN(question);
                // 判断题目有无重复。为 true，代表可用
                if(checkExp.checkDictionary(rpn.split(" "))){
                    // 计算答案
                    String answer = calculate.calculate(rpn);
                    if(!answer.equals("error")){
                        MyFile.write("Exercises.txt", order + ". " + question);
                        MyFile.write("Answers.txt", order + ". " + answer);
                        num--; order++;
                    }
                }
            }
        } else if(args.length == 4){
            if(args[0].equals("-e") && args[2].equals("-a")){
                CheckAnswer checkAnswer = new CheckAnswer();
                String check = checkAnswer.check(args[1], args[3]);
                if(!check.equals("error")){
                    // 清空Grade.txt的内容
                    MyFile.clear("Grade.txt");
                    // 将统计结果输出到文件Grade.txt
                    MyFile.write("Grade.txt", check);
                }
            }
        }
    }
}
