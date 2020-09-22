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
	//�ı�����(���һ����)
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
	// ��ȡ���£������֣�
	public static ArrayList<String> getArticle(String path)throws IOException {
		ArrayList<String> res=new ArrayList<String>();  //�����з�
		StringBuilder sb=new StringBuilder();  //ƴ�Ӷ�ȡ������
		String temp1=null;  //��ʱ�������洢sbû�г�ȥ�����ŵ����ݣ�ֻ��ȥ�ո�
		String temp=null; //��ʱ�������洢sbȥ���ո���ȡ�������ŵ�����
		try {
			BufferedReader reader=new BufferedReader(new FileReader(new File(path)));
			int ch=0;
			while((ch=reader.read())!=-1) {
				temp1=sb.toString().trim().replaceAll("\\s*", "");
				temp=temp1.replaceAll("[\\pP\\p{Punct}]", "");
				if((char)ch == '\n') {
					//�ж��Ƿ���ڿո�
					if(!"".equals(temp)) {
						//���˶���Ľ�β��������뵽���������sb
						res.add(temp);
					}
					sb.delete(0, sb.length());
				} else {
					//δ������Ľ�β��������ݴ�
					sb.append((char)ch);
				}
			}
			// ���һ������ǿգ� �����һ�μ��룬���򲻴���
	        if (!"".equals(temp)) {
	            res.add(temp);
	        }
			reader.close();
		} catch(Exception e) {
			System.out.println("·����������ʧ��");
			System.exit(0);
		}
		return res;
	}
	// ����һƪ
	public static void checkOne(String originPath, Set<String> dictionary, String copyPath, FileWriter fileWrite) throws IOException {
		long startTime = System.currentTimeMillis();    //��ȡ��ʼʱ��
		// ��Ϯ�ı�
		ArrayList<String> copy=getArticle(copyPath);
		// ���һ��  ��������
		List<String> copyTxtListItem=null;
		//����
		float allWordsNum=0;  //��Ϯ�ı�����
		float similarWords=0;  // ������
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
			
		long endTime = System.currentTimeMillis();    //��ȡ����ʱ��
		
		System.out.println("ԭ��·����"+originPath+"\t��Ϯ����·����"+copyPath+"\n�����ʣ�"+String.format("%.2f", similar)+"\nִ��ʱ�䣺"+(endTime-startTime)+"ms");
		
		// д���ļ�
		fileWrite.append("ԭ��·����"+originPath+"		��Ϯ����·����"+copyPath+"\n�����ʣ�"+String.format("%.2f", similar)+"\n\n");
	}
	public static void main(String[] args) throws IOException{
		// ��ǰ�ļ����ڴ��̸�Ŀ¼
		String currentPath=System.getProperty("user.dir");
		String rootPath=currentPath.substring(0, 3);
		
		//�½��ļ�
		String filePath=rootPath+"���Ĳ��ؽ��.txt";
		File resFile=new File(filePath);
		if(!resFile.exists()) {
			try {
				resFile.createNewFile();
			} catch(IOException e) {
				e.printStackTrace();
			}
		}
		// д���ļ�
		FileWriter fileWrite=new FileWriter(resFile, true);
		
		System.out.println("ԭ��·����");
		Scanner scanner=new Scanner(System.in);
		String originPath=scanner.nextLine();  //"E:\ѧϰ\�������\test\orig.txt";
		System.out.println("\n��Ϯ�ı�·����");

		System.out.println();
		// ԭ�ı�
		ArrayList<String> origin=getArticle(originPath);  //�õ���������
		// ����ԭ�����ɴʵ�
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
		
		System.out.println("\n��ѯ�����д��"+filePath);
		
	}
}
