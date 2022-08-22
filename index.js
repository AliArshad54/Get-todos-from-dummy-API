document.querySelector('button').addEventListener('click' , (e) =>{
    getCompletedtodos();
})
function getCompletedtodos(){
 let values=[];
unchecked=document.querySelectorAll('input[type="checkbox"]:checked');
unchecked.forEach(chk=> values.push(chk.value));
    console.log(values)
}
document.querySelector('#UnCheckAll').addEventListener('click',(e) => {
    let checkboxes= document.querySelectorAll('input[type=checkbox]')
    checkboxes.forEach(
        function(checkbox) 
        {
        checkbox.checked=false;
        }
    )
})
document.querySelector('#CheckAll').addEventListener('click' , (e) => {
    let checkboxes = document.querySelectorAll('input[type=checkbox]')
    checkboxes.forEach(
        function(checkbox)
        {
        checkbox.checked=true;
        }
    )
})

window.addEventListener('DOMContentLoaded', event=>{

    div_todos=document.querySelector('#todos')
    fetch('http://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => {

    todos.forEach(todo=> {
            div_todos.innerHTML +=

            `<input type="checkbox"  value="${todo.id}" id="${todo.id}" ${ todo.completed ? "completed":"" } /> 
            <label for="${todo.id}"> ${todo.title}  </label><br/>`
        
        });
        getCompletedtodos();
        uncheckAll();
      })
     .catch(err => console.error(err));
    }
    )    