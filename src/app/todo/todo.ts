export interface ITodo {
    task: string;
    completed: boolean;
}

export class ToDoTask implements ITodo {
    task: string;
    completed: boolean;

    constructor(taskName, isComplete = false) {
        this.task = taskName;
        this.completed = isComplete;
    }


    completeTask() {
        this.completed = true;
    }
}