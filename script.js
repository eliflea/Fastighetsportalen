const nav = document.querySelector('.navigation')
fetch('/navigation.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})