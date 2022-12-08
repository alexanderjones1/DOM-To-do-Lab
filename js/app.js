const inputEl = document.querySelector('#input')
const btnEl = document.querySelector('#submit-button')
const ulEl = document.querySelector('#todo-list')

btnEl.addEventListener('click', function(evt) {
    const li = document.createElement('li')
    li.textContent = inputEl.value
    ulEl.appendChild(li)
    inputEl.value = ""
    
})

