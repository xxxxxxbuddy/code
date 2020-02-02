import java.util.HashMap;
import java.util.Map;
import java.util.Stack;

public class $20_ValidParentheses {
    public boolean isValid(String s) {
        if (s.isEmpty()) return true;
        if (s.length() % 2 == 1) return false;

        Map<Character, Integer> map = new HashMap();
        map.put('(', 1);
        map.put(')', -1);
        map.put('[', 2);
        map.put(']', -2);
        map.put('{', 3);
        map.put('}', -3);
        Stack<Character> stack = new Stack<>();
        for (int i = 0; i < s.length(); i++) {
            if (stack.empty() || map.get(stack.peek()) != -map.get(s.charAt(i))) {
                stack.push(s.charAt(i));
            } else {
                stack.pop();
            }
        }
        return stack.empty();
    }
}
