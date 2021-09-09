Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        newTask: '',
        tasks: [
            {
                title: 'Fare spesa',
                done: false,
            },
        ],
    },
    methods: {
        
        submitTask(){
            let newObject = {
                title : this.newTask,
                done: false
            };


            if (this.newTask != '') {
                this.tasks.push(newObject);
                this.newTask = "";
            }
        },
        removeTask(i){
            confirm('Sicuro di voler cancellare?')
            this.tasks.splice(i, 1);
        },
        isDone(){
            // this.tasks.done = true;
            this.tasks.forEach(element => {
                console.log(this.tasks[title])
            });
        }
    },
})