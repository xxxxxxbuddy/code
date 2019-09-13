// class AsyncManager {
//     constructor(props) {
//         super(props);
//         this.taskList = [];
//         this.workingTaskList = [];
//         if (Array.isArray(props.task) && props.task.length > 0) {
//             props.task.reduce((taskList, curTask) => {
//                 taskList.push({id: taskList.length, task});
//             }, this.taskList);
//         }
        
//     }

//     taskNum() {
//         return this.taskList.length;
//     }

//     workingTaskNum() {
//         return this.workingTaskList.length;
//     }

//     canExecute() {
//         return this.workingTaskNum < 2;
//     }
    
//     addTask(task) {
//         if (!task || !(typeof task === 'function' || task instanceof Promise)) {
//             throw Error('Task must be a function or Promise object');
//         }

//         this.taskList.push({id: this.taskList.length, task});
//         this.executeTask();
//     }

//     executeTask() {
//         if (!this.canExecute() || this.taskNum() === 0) {
//             return;
//         }

//         const fn = this.taskList.unshift();
//         this.workingTaskList.push(fn.id);
//         try {
//             fn.task();
//         } finally {

//             this.workingTaskList.splice(this.workingTaskList.indexOf())
//         }
//         this.executeTask();
//     }
// }

function taskManager() {
    let fnArray = [];
    let paramsArray = [];
    let count = 0;
    function run(fn) {
        let param = Array.from(arguments).slice(1);
        fnArray.push(fn);
        paramsArray.push(param);
        execute()
    }
     
    function execute() {
        if(count < 2 && fnArray.length > 0) {
            let fn = fnArray.shift();
            let param = paramsArray.shift();
            count++;
            fn.apply(window, param)
            .then(function() {
                count--;
                execute();
            })
        }
    }
     
    let o = {
        run: run
    }
     
    return o;
}