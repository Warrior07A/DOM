 let todos = [];
    const todoInput = document.querySelector("input");
    const todosContainer = document.getElementById("todos");

    function ADDTODO() {
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            todos.push({
                title: todoInput.value
            });
            render();
            CLEARALL(); // Call CLEARALL only after adding
        } else {
            alert("please add a todo");
        }
    }

    function DELETET(INDEX) {
        todos.splice(INDEX, 1);
        render();
    }

    function DELETETODOA() {
        todos = [];
        render();
    }

    function DELETETODOF() {
        todos.splice(0, 1);
        render();
    }

    function DELETETODOL() {
        todos.splice(-1, 1);
        render();
    }

    function CLEARALL() {
        todoInput.value = "";
    }

    function TODOCOMPONENT(todo, INDEX) {
        const span = document.createElement("span");
        const h3 = document.createElement("h3"); 
        const button = document.createElement("button");
        h3.innerHTML = todo.title;
        button.innerHTML = "Delete";
        button.style.marginLeft = "100px";
        button.onclick = function() {
            DELETET(INDEX);
        };
        // h3.style.paddingLeft = "400px";
        h3.style.textAlign="center";
        span.style.height 
        span.append(h3);
        span.append(button);
        return span;
    }

    function render() {
        todosContainer.innerHTML = "";
        for (let i = 0; i < todos.length; i++) {
            const elem = TODOCOMPONENT(todos[i], i);
            todosContainer.appendChild(elem);
        }
    }

  

