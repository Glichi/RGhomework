package check;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.HashSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.Set;

public class CheckPassage {
	//文本特征(针对一段落)
	public static List<String> getCoupleWords(String paragraph) {
		List<String> coupleWordsList = new ArrayList<String>();
		String[] wordsList = paragraph.split("");
		String words = "";
		for (int i = 0; i < wordsList.length-1; i++) {
			words = wordsList[i]+wordsList[i+1];
			coupleWordsList.add(words);
		}
		return coupleWordsList;
	}
	// 获取文章（纯文字）
	public static ArrayList<String> getArticle(String path)throws IOException {
		ArrayList<String> res=new ArrayList<String>();  //段落切分
		StringBuilder sb=new StringBuilder();  //拼接读取的内容
		String temp1=null;  //临时变量，存储sb没有除去标点符号的内容（只除去空格）
		String temp=null; //临时变量，存储sb去除空格并且取出标点符号的内容
		try {
			BufferedReader reader=new BufferedReader(new FileReader(new File(path)));
			int ch=0;
			while((ch=reader.read())!=-1) {
				temp1=sb.toString().trim().replaceAll("\\s*", "");
				temp=temp1.replaceAll("[\\pP\\p{Punct}]", "");
				if((char)ch == '\n') {
					//判断是否存在空格
					if(!"".equals(temp)) {
						//到了段落的结尾，将其加入到链表，并清空sb
						res.add(temp);
					}
					sb.delete(0, sb.length());
				} else {
					//未到段落的结尾，将结果暂存
					sb.append((char)ch);
				}
			}
			// 最后一段如果非空， 将最后一段加入，否则不处理
	        if (!"".equals(temp)) {
	            res.add(temp);
	        }
			reader.close();
		} catch(Exception e) {
			System.out.println("路径出错，操作失败");
			System.exit(0);
		}
		return res;
	}
	// 查重一篇
	public static void checkOne(String originPath, Set<String> dictionary, String copyPath, FileWriter fileWrite) throws IOException {
		long startTime = System.currentTimeMillis();    //获取开始时间
		// 抄袭文本
		ArrayList<String> copy=getArticle(copyPath);
		// 针对一段  两两分组
		List<String> copyTxtListItem=null;
		//查重
		float allWordsNum=0;  //抄袭文本总数
		float similarWords=0;  // 相似数
		for(int i=0; i<copy.size(); i++) {
			copyTxtListItem=getCoupleWords(copy.get(i));
			allWordsNum+=copyTxtListItem.size();
			for(int n=0; n<copyTxtListItem.size(); n++) {
				if(dictionary.contains(copyTxtListItem.get(n))) {
					similarWords++;
				}
			}
		}
	
		float similar=similarWords/allWordsNum;
			
		long endTime = System.currentTimeMillis();    //获取结束时间
		
		System.out.println("原文路径："+originPath+"\t抄袭论文路径："+copyPath+"\n查重率："+String.format("%.2f", similar)+"\n执行时间："+(endTime-startTime)+"ms");
		
		// 写入文件
		fileWrite.append("原文路径："+originPath+"		抄袭论文路径："+copyPath+"\n查重率："+String.format("%.2f", similar)+"\n\n");
	}
	public static void main(String[] args) throws IOException{
		// 当前文件所在磁盘根目录
		String currentPath=System.getProperty("user.dir");
		String rootPath=currentPath.substring(0, 3);
		
		//新建文件
		String filePath=rootPath+"论文查重结果.txt";
		File resFile=new File(filePath);
		if(!resFile.exists()) {
			try {
				resFile.createNewFile();
			} catch(IOException e) {
				e.printStackTrace();
			}
		}
		// 写入文件
		FileWriter fileWrite=new FileWriter(resFile, true);
		
		System.out.println("原文路径：");
		Scanner scanner=new Scanner(System.in);
		String originPath=scanner.nextLine();  //"E:\学习\软件工程\test\orig.txt";
		System.out.println("\n抄袭文本路径：");

		System.out.println();
		// 原文本
		ArrayList<String> origin=getArticle(originPath);  //得到段落数组
		// 根据原文生成词典
		Set<String> dictionary = new HashSet<String>();
		List<String> dictionaryItem = null;
		for(int j=0; j<origin.size(); j++) {
			dictionaryItem = getCoupleWords(origin.get(j));
			for(int k=0; k<dictionaryItem.size(); k++) {
				dictionary.add(dictionaryItem.get(k));
			}
		}
		

		
		scanner.close();
		fileWrite.close();
		
		System.out.println("\n查询结果已写入"+filePath);
		
	}
}
