package check;

import java.io.IOException;

import org.junit.jupiter.api.Test;

class CheckPassageTest {

	@Test
	public void testMain() {
		String[] paths = {
                "E:\\学习\\软件工程\\test\\orig.txt",
                "E:\\学习\\软件工程\\test\\orig_0.8_add.txt",
                "E:\\论文查重结果.txt"
        };
        try {
        	CheckPassage.main(paths);
        } catch (IOException e) {
            e.printStackTrace();
        }
	}

}
