const inputbox = document.getElementById('inputbox')
const listcon = document.getElementById('list-con')

function addtask() {
    if (inputbox.value === '') {
        alert('Your must right something')
    }
    else{
        let newlis = document.createElement("li")
        newlis.innerHTML= inputbox.value
        listcon.appendChild(newlis)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        newlis.appendChild(span)
    }
    inputbox.value= ''
    savedata()
}

listcon.addEventListener('click',function (e) {
    if (e.target.tagName=== 'LI') {
        e.target.classList.toggle('checked')
        savedata()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        savedata()
    }
})

function savedata() {
    localStorage.setItem('data', listcon.innerHTML)
}
function showtask(){
    listcon.innerHTML = localStorage.getItem('data')
}
showtask()