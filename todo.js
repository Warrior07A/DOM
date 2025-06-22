 let todos = [];
    const todoInput = document.querySelector("input");
    const todosContainer = document.getElementById("four");

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
        const div = document.createElement("div");
        const h8 = document.createElement("h8"); 
        const button = document.createElement("button");
        h8.style.color="white";
        h8.innerHTML = todo.title;
        
        button.style.cursor="pointer";
        button.innerHTML = "Delete";
        
        button.style.height="25px";
             
        h8.style.textAlign=  
        button.onclick = function() {
            DELETET(INDEX);
        };
        
        div.style.height="40px";
        div.style.width="360px";
        div.style.border="black solid 10px";
        div.style.paddingTop="10px";
        div.style.display="flex";
        div.style.flexDirection="row";
        div.style.justifyContent="space-around";
        div.append(h8);
        div.append(button);
        return div;
    }

    function render() {
        todosContainer.innerHTML = "";
        for (let i = 0; i < todos.length; i++) {
            const elem = TODOCOMPONENT(todos[i], i);
            todosContainer.appendChild(elem);
        }
    }

  

