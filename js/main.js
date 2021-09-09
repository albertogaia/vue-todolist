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
            this.tasks.splice(i, 1)
            
        },
        changeStatus(element, i){
            // this.tasks.done = true;
            console.log(this.tasks[i].done)
            this.tasks[i].done = !this.tasks[i].done;
        },
        removeAllTasks(){
            // let containerTaks = document.getElementById(container);

            // containerTaks.innerHTML = ''
            if(confirm('Sicuro/a di voler cancellare tutte le task?') == true){
                this.tasks = [];
            }
            
        }
    },
})