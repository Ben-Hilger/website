type QueueNode<T> = {
    value: T,
    next?: QueueNode<T>
}

export default class Queue<T> {
    
    public length: number;
    private head?: QueueNode<T>;
    private tail?: QueueNode<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined; 
    }
    
    enqueue(item: T): void {
        const node = { value: item } as QueueNode<T>;
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }
    
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;

        const head = this.head;
        this.head = this.head.next;

        head.next = undefined;

        if (this.length === 0) {
            this.head = this.tail = undefined;
        }

        return head.value;
    }
    
    peek(): T | undefined {
        return this.head?.value;
    }

    peekAllForDisplay(): T[] {
        let order: T[] = [];
        if (!this.head) {
            return order;
        }

        let current: QueueNode<T>|undefined = this.head;
        
        do {
            order.push(current.value);
            current = current.next;
        } while (current);

        return order;
    }

}
