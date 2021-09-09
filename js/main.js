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
            {
                title: 'Fare compiti',
                done: true,
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
            if(confirm('Sicuro di voler cancellare?') == true){
                this.tasks.splice(i, 1)
            }
        },
        changeStatus(element, i){
            // this.tasks.done = true;
            console.log(this.tasks[i].done)
            this.tasks[i].done = !this.tasks[i].done;
        }
    },
})