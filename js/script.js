// Seleção de elementos 
const todoForm =  document.querySelector("#todo-form");
const todoInput =  document.querySelector("#todo-input");
const todoList  =  document.querySelector("#todo-list");
const editForm =  document.querySelector("#todo-edit_form");
const editInput =  document.querySelector("#edit-input_form");
const cancelEditBtn =  document.querySelector("#cancel-edit-btn");

// Funções

const saveTodo = (text) => {

   const todo = document.createElement("div");
   todo.classList.add("todo");

   const todoTitle = document.createElement("h3");
   todoTitle.innerText = text;
   todo.appendChild(todoTitle);

   const doneBtn = document.createElement("button");
   doneBtn.classList.add("finish-todo");
   doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
   todo.appendChild(doneBtn);

   const editBtn = document.createElement("button");
   doneBtn.classList.add("edit-todo");
   editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
   todo.appendChild(editBtn);

   const removeBtn = document.createElement("button");
   removeBtn.classList.add("remove-todo");
   removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
   todo.appendChild(removeBtn);

   todoList.appendChild(todo);
   todoInput.value = " "
};

// Eventos 

todoForm.addEventListener("submit", (e) => {
   e.preventDefault();

   const inputValue = todoInput.value;

   if(inputValue){
      saveTodo(inputValue);
   }
})