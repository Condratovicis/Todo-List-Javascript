// Seleção de elementos 
const todoForm =  document.querySelector("#todo-form");
const todoInput =  document.querySelector("#todo-input");
const todoList  =  document.querySelector("#todo-list");
const editForm =  document.querySelector("#todo-edit_form");
const editInput =  document.querySelector("#edit-input_form");
const cancelEditBtn =  document.querySelector("#cancel-edit-btn");

let oldInputValue;

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
   editBtn.classList.add("edit-todo");
   editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
   todo.appendChild(editBtn);

   const removeBtn = document.createElement("button");
   removeBtn.classList.add("remove-todo");
   removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
   todo.appendChild(removeBtn);

   todoList.appendChild(todo);
   todoInput.value = " ";
   todoInput.focus();
};

const toggleForms = () => {
   editForm.classList.toggle("hide");
   todoForm.classList.toggle("hide");
   todoList.classList.toggle("hide");
}

const updateTodoTitle = (text) => {

   const todos = document.querySelectorAll(".todo");

   todos.forEach((todo) => {

      let todoTitle = todo.querySelector("h3");

      if(todoTitle.innerText === oldInputValue){
         todoTitle.innerText = text;
      };
   })

};

// Eventos 

todoForm.addEventListener("submit", (e) => {
   e.preventDefault();

   const inputValue = todoInput.value;

   if(inputValue){
      saveTodo(inputValue);
   }
});

document.addEventListener("click", (e) => {

   const targetEl = e.target;
   const parentEl = targetEl.closest("div");
   let todoTitle;

   if(parentEl && parentEl.querySelector("h3")){
      todoTitle = parentEl.querySelector("h3").innerText;
   }

   if(targetEl.classList.contains("finish-todo")){
      // console.log("click".repeat(2));
      parentEl.classList.toggle("done");
   };

   if(targetEl.classList.contains("remove-todo")){
      parentEl.remove();
   };

   if(targetEl.classList.contains("edit-todo")){
      toggleForms();

      editInput.value = todoTitle;
      oldInputValue = todoTitle;

      console.log("Editando...");
   };
});

cancelEditBtn.addEventListener("click", (e) => {
   e.preventDefault();

   toggleForms();
});

editForm.addEventListener("submit", (e) => {
   e.preventDefault();

   const editInputValue = editInput.value;

   if(editInputValue){
      // Atualizar
      updateTodoTitle(editInputValue);
   }

   toggleForms();

});