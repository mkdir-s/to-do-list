const todoItems = document.getElementsByClassName('to-do-items')[0];
const input = document.getElementById('input');
const trashIcon = document.getElementById('trash');

input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        addItem();
    }
})

function addItem() {
    let divParent = document.createElement('div');
    let divChild = document.createElement('div');
    let checkIcon = document.createElement('i');
    let trashIcon = document.createElement('i');

    divParent.className = 'item';
    divParent.innerHTML = `<div>${input.value}</div>`;
    checkIcon.className = 'fa-solid fa-circle-check';
    checkIcon.style.color = 'lightgray';
    checkIcon.addEventListener('click', () => {
        checkIcon.style.color = 'limegreen';
    })
    divChild.appendChild(checkIcon);
    trashIcon.className = 'fa-solid fa-trash';
    trashIcon.style.color = 'darkgray';
    trashIcon.addEventListener('click', () => {
        divParent.remove();
    })
    divChild.appendChild(trashIcon);
    divParent.appendChild(divChild);

    todoItems.appendChild(divParent);

    input.value = '';
}