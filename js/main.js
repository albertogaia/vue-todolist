Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        newTask: '',
        selectedStatus: '',
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
    computed: {
        computed_tasks: function() {
            console.log(this.selectedStatus);
            let selectionValue = this.selectedStatus;
            // console.log(this.tasks);
            let filteredList = [];
            if(selectionValue == 'true'){
                // this.tasks=[];
                console.log(this.tasks)
                filteredList = this.tasks.filter((task)=>{
                    // console.log(filteredList)
                    return task.done == true;
                })
            }else if(selectionValue == 'false'){
                // this.tasks=[];
                filteredList = this.tasks.filter((task)=>{
                    return task.done == false;
                })
            }else{
                return this.tasks
            }

            console.log(filteredList)
            return filteredList;

        }
            
          
        
    }
})