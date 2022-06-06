console.log(document.forms);
const title = document.getElementById('header-title').innerHTML = 'Title is Changed'
document.getElementById('header-title').style.color = 'yellow'
document.getElementById('main-header').style.border = 'solid 5px black'

document.getElementsByClassName('title')[0].innerHTML = '<b>ADD ITEM</b>'
document.getElementsByClassName('title')[0].style.color = 'green'


console.log("Header title is now: " + title);
