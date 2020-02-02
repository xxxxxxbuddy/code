import java.util.Stack;

public class $71_SimplifyPath {
    public static String simplifyPath(String path) {
        Stack<String> stack = new Stack<String>();
        String[] dir = path.split("//*");
        for (int i = 1; i < dir.length; i++) {
            if (dir[i].equals(".")) {
                continue;
            } else if (dir[i].equals("..")) {
                if (!stack.isEmpty()) {
                    stack.pop();
                }
            } else {
                stack.push(dir[i]);
            }
        }
        if (stack.isEmpty()) {
            return "/";
        }
        StringBuffer res = new StringBuffer();
        while (!stack.isEmpty()) {
            res.insert(0, '/' + stack.pop());
        }

        return res.toString();
    }
}
