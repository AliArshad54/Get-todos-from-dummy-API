
    window.addEventListener('DOMContentLoaded',event=>{
    div_check=document.querySelector('#todos')
    fetch('http://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then(todos => {

    todos.forEach(todo=> {
            div_check.innerHTML+= 
            '<input type="checkbox"  value="1" id="c1" /> <label for="c1"> Select this  </label><br/>'
        
        });
getCompletedTodos()
      })
      .catch(err=>console.error(err));
    })
    function getCompletedTodos() {
       let values=[];
       checked=document.querySelectorAll('inputs[type="checkbox"]:checked')
       checked.forEach(todos=>values.push(todos.value))
       console.log(values);
      }
        function checkAll() {
            var inputs = document.querySelectorAll('#c1');
            for (i = 0; i < inputs.length; i++) {
                inputs[i].checked = true;
            }
        }
        function uncheckAll() {
            var inputs = document.querySelectorAll('#c1');
            for (i = 0; i < inputs.length; i++) {
                inputs[i].checked = false;
            }
        }
      
        window.onload = function() {
            window.addEventListener('load',getCompletedTodos,checkAll, false,);
        }