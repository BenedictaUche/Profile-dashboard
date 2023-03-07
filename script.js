function run() {
    alert('Thanks for sharing');
}

let share = document.querySelector('#share');
share.addEventListener('click', run)
let upload = document.querySelector('#upload');
upload.addEventListener('click', run)
let newbtn = document.querySelector('#new-btn');
newbtn.addEventListener('click', run)

function searchValue() {

    search.innerHTML = value;
}
let search = document.querySelector('#name');
let value = document.querySelector('input.value');
let username = document.querySelector('.search-icon');
username.addEventListener('click', searchValue);