package entity;

/**
 * 分数实体类
 * @author cmt&gzq
 */
public class Fraction {

    // 分子
    private int numerator;
    // 分母
    private int denominator;

    public Fraction(){

    }

    public Fraction(int numerator, int denominator){
        // 将分数化为最简
        int gcd = divAlgorithm(numerator, denominator);
        numerator /= gcd;
        denominator /= gcd;
        this.numerator = numerator;
        this.denominator = denominator;
    }

    public int getNumerator() {
        return numerator;
    }

    public void setNumerator(int numerator) {
        this.numerator = numerator;
    }

    public int getDenominator() {
        return denominator;
    }

    public void setDenominator(int denominator) {
        this.denominator = denominator;
    }

    @Override
    public String toString() {
        if(numerator < denominator)
            return numerator + "/" + denominator;
        else
            return (numerator / denominator) + "'" + (numerator % denominator) + "/" + denominator;
    }

    /**
     * 辗转相除法求最大公约数
     * @param num1
     * @param num2
     * @return 返回最大公约数
     */
    private int divAlgorithm(int num1, int num2){
        if(num2 == 0)
            return num1;
        return divAlgorithm(num2, num1 % num2);
    }

}
