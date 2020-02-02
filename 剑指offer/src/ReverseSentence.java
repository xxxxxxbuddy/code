public class ReverseSentence {
    /**
     * @param str original sentence
     * @return reversed sentence
     * @link https://www.nowcoder.com/practice/3194a4f4cf814f63919d0790578d51f3
     * 例如，“student. a am I”,正确的句子应该是“I am a student.”。
     */
    public static String reverseSentence(String str) {
        if (str.trim().equals("")) return str;
//        ArrayList<String> res = new ArrayList<String>();
//        String temp = "";
//        for (int i = 0; i < str.length(); i++) {
//            if (str.charAt(i) == ' ') {
//                if (temp.length() > 0) {
//                    res.add(temp);
//                    temp = "";
//                } else {
//                    continue;
//                }
//            } else if (str.charAt(i) == '.' || str.charAt(i) == '?' || str.charAt(i) == '!'){
//                temp += str.charAt(i);
//                res.add(temp);
//                temp = "";
//            } else {
//                temp += str.charAt(i);
//            }
//        }
//        if (temp != "") {
//            res.add(temp);
//        }
//        String reversedStr = "";
//
//        for (int i = res.size() - 1; i >= 0; i--) {
//            reversedStr = reversedStr + res.get(i) + (i != 0 ? ' ' : "");
//        }
//        return reversedStr;
        String[] strings = str.split(" ");
        StringBuffer sb = new StringBuffer();
        for (int j = strings.length - 1; j >= 0; j--) {
            sb.append(strings[j]);
            if (j > 0) {
                sb.append(" ");
            }
        }
        return sb.toString();
    }
}
