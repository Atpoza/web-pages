let tasks = [];
function onLoad(){
    if(localStorage.getItem("tasks")){
        tasks = JSON.parse(localStorage.getItem("tasks"));
        loadAllTasks();
    }
}

function Task(taskName,date){
    this.taskName = taskName;
    this.date = date;
}

function AddToDoc(task){
    const d1 = document.createElement("div");
    d1.classList.add("task");

    const p1 = document.createElement("p");
    const textNode1 = document.createTextNode(task.taskName);
    p1.appendChild(textNode1);
    p1.classList.add("task-name");
    d1.appendChild(p1);

    const d2 = document.createElement("div");
    d2.classList.add("task-div");
    
    const p2 = document.createElement("p");
    const textNode2 = document.createTextNode(task.date);
    p2.appendChild(textNode2);
    p2.classList.add("task-time");
    d2.appendChild(p2);

    const btn = document.createElement("button");
    btn.addEventListener("click",function(){removeDiv(btn,task)});
    btn.classList.add("task-cancel");
    const img = document.createElement("img");
    img.src = "bxs-message-square-x.svg";
    img.classList.add("task-image");
    btn.appendChild(img);
    d2.appendChild(btn);

    d1.appendChild(d2);

    document.getElementById("tasks").appendChild(d1);
}

function removeDiv(btn,task){
    btn.parentNode.parentNode.remove();
    let tcpy = tasks;
    tasks = [];
    for(let x of tcpy){
        if(x === task){
            continue;
        }
        tasks.push(x);
    }
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function getDate(){
    const date = new Date();
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let month = (date.getMonth()+1) < 10 ? "0" + (date.getMonth()+1) : (date.getMonth()+1) 
    return day+"."+month+"."+date.getFullYear();
}

function loadAllTasks(){
    for(let x of tasks){
        AddToDoc(x);
    }
}

 function addTask(event){
    event.preventDefault();
    if(document.getElementById("txtbox").value != ""){
        let txtbox = document.getElementById("txtbox");
        const task = new Task(txtbox.value,getDate());
        tasks.push(task);
        localStorage.setItem("tasks",JSON.stringify(tasks));
        AddToDoc(task);
    }
}