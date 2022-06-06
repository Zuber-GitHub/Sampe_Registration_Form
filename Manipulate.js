document.getElementById("header-title").innerText = "Changed Title"
document.getElementById("main-header").style.border = "solid 5px black"
console.log(document.getElementsByClassName("title")[0].innerText = "Add Items Changed")
console.log(document.getElementsByClassName("title")[0].style.color = "green")
console.log(document.getElementsByClassName("title")[0].style.fontWeight = "bold")
console.log(document.getElementsByClassName("title")[0].style.fontWeight = "bold")
console.log(document.getElementsByClassName("title")[0].style.fontWeight = "bold")
const list = document.getElementsByClassName("list-group-item")
console.log(list[2].style.backgroundColor = 'green')
for(i of list){
    i.style.fontWeight = 'bold'
}
console.log(document.getElementsByClassName('list-group')[0].children[4].textContent = "Modified by Class Name")
console.log(document.getElementsByTagName('li')[4].textContent = 'Modified by Tagname')
