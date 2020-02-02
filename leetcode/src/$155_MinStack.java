public class $155_MinStack {
    /**
     * initialize your data structure here.
     */
    private int[] stack;
    private int min, index;

    public $155_MinStack() {
        stack = new int[]{};
        min = index = 0;
    }

    public void push(int x) {
        if (index == 0 || x < this.min) {
            this.min = x;
        }
        this.stack[index++] = x;
    }

    public void pop() {
        this.index--;
        if (this.index == 0) {
            this.min = Integer.MIN_VALUE;
        }
    }

    public int top() {
        return this.stack[index - 1];
    }

    public int getMin() {
        return this.min;
    }
}
