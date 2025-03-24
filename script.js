document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task");
    const todoList = document.getElementById("todo-list");
    const doneList = document.getElementById("done-list");
    const favoritesBtn = document.getElementById("favorites-btn");
    const changeBgBtn = document.getElementById("change-bg");
    
    addTaskBtn.addEventListener("click", () => {
        if (taskInput.value.trim() !== "") {
            addTask(taskInput.value);
            taskInput.value = "";
        }
    });
    
    function addTask(text) {
        const task = document.createElement("div");
        task.classList.add("task");
        task.innerHTML = `
            <span>${text}</span>
            <button class="fav-btn">⭐</button>
            <button class="task-done">✔</button>
            <button class="bell">🔔</button>
        `;
        
        task.querySelector(".task-done").addEventListener("click", () => {
            if (task.parentElement === todoList) {
                doneList.appendChild(task);
            } else {
                todoList.appendChild(task);
            }
        });
        
        todoList.appendChild(task);
    }
    
    changeBgBtn.addEventListener("click", () => {
        alert("Funzione di cambio sfondo in arrivo!");
    });
});
