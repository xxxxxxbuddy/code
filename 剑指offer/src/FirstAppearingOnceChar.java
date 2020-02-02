import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class FirstAppearingOnceChar {
    private Map<Character, Integer> map = new HashMap<Character, Integer>();
    private ArrayList<Character> order = new ArrayList<Character>();

    //Insert one char from stringstream
    public void Insert(char ch) {
        if (map.containsKey(ch)) {
            map.replace(ch, map.get(ch) + 1);
        } else {
            map.put(ch, 1);
            order.add(ch);
        }
    }

    //return the first appearence once char in current stringstream
    public char FirstAppearingOnce() {
        if (map.size() == 0) return '#';
        for (int i = 0; i < order.size(); i++) {
            if (map.containsKey(order.get(i)) && map.get(order.get(i)) == 1) {
                return order.get(i);
            }
        }
        return '#';
    }
}
