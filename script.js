const addForm = document.querySelector('.add');
const liste = document.querySelector('.tasks');

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = addForm.add.value.trim();

    if(task.length != 0){
        generateTemplate(task);
        add.reset();
    }else{
        alert('Allez là , task task task! ')
    }
});

const generateTemplate = (task) => {
    const html = `<li class='list-group-item d-flex justify-content-between align-items-center'>
    <span>${task}</span>
    <i class="fa fa-trash-o delete"></i>
    </li>`;
    liste.innerHTML += html;

}

liste.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})