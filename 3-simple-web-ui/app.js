

//----------------------------------------------------
// using DOM-api

let box = document.querySelector('.alert');
let showBtn = document.querySelector('.btn-primary');
let hideBtn = document.querySelector('.btn-danger');

showBtn.addEventListener('click', (e) => {
    box.style.display = ''
})
hideBtn.addEventListener('click', (e) => {
    box.style.display = 'none'
})

//----------------------------------------------------

// using XHR/fetch api
document.getElementById('load-todos')
    .addEventListener('click', (e) => {
        let apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=2';
        let promise = fetch(apiUrl);
        promise
            .then((response) => response.json())
            .then(todos => {
                document.querySelector('.jumbotron')
                    .innerHTML = JSON.stringify(todos);
            });
    })
//----------------------------------------------------  
// using Timer-API
let imageEle = document.querySelector('img');
let idx = 0;
setInterval(() => {
    let image = `./images/${idx + 1}.jpeg`
    imageEle.src = image;
    idx++;
    if (idx === 5) {
        idx = 0;
    }
}, 1000);

//----------------------------------------------------