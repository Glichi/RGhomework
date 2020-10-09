package service;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

/**
 * 检查答案类
 */
public class CheckAnswer {

    // 错误题目序号集合
    private List<String> wrongOrders = new ArrayList<>();
    // 正确题目序号集合
    private List<String> correctOrders = new ArrayList<>();

    /**
     * 检查用户输入的答案是否正确
     * @param exerciseFileName 用户文件名
     * @param answerFileName 答案文件名
     */
    public String check(String exerciseFileName, String answerFileName){
        File exerciseFile = new File(exerciseFileName);
        File answerFile = new File(answerFileName);
        if(!exerciseFile.exists() || !answerFile.exists()){
            System.out.println("文件不存在");
            return "error";
        }
        try {
            BufferedReader br1 = new BufferedReader(new FileReader(exerciseFile));
            BufferedReader br2 = new BufferedReader(new FileReader(answerFile));
            String line1, line2;
            while ((line1 = br1.readLine()) != null && (line2 = br2.readLine()) != null){
                String[] str1 = line1.split("\\.");
                String[] str2 = line2.split("\\.");
                if((str1[1].trim()).equals(str2[1].trim())){
                    correctOrders.add(str1[0]);
                }else{
                    wrongOrders.add(str2[0]);
                }
            }
        } catch (IOException e) {
            System.out.println("读取文件失败");
            e.printStackTrace();
        }
        return print();
    }

    /**
     * 打印输出结果
     */
    public String print(){
        StringBuilder sb = new StringBuilder();
        sb.append("Correct: ").append(correctOrders.size()).append(" (");
        printOrder(sb, correctOrders);
        sb.append(")").append("\n");
        sb.append("Wrong: ").append(wrongOrders.size()).append(" (");
        printOrder(sb, wrongOrders);
        sb.append(")").append("\n");
        return sb.toString();
    }

    private void printOrder(StringBuilder sb, List<String> orders){
        for (int i = 0; i < orders.size(); i++){
            if(i == orders.size() - 1){
                sb.append(orders.get(i));
            }else{
                sb.append(orders.get(i)).append(", ");
            }
        }
    }
}
