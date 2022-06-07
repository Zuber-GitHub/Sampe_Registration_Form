// document.getElementById("header-title").innerText = "Changed Title"
// document.getElementById("main-header").style.border = "solid 5px black"
// console.log(document.getElementsByClassName("title")[0].innerText = "Add Items Changed")
// console.log(document.getElementsByClassName("title")[0].style.color = "green")
// console.log(document.getElementsByClassName("title")[0].style.fontWeight = "bold")
// console.log(document.getElementsByClassName("title")[0].style.fontWeight = "bold")
// console.log(document.getElementsByClassName("title")[0].style.fontWeight = "bold")
// const list = document.getElementsByClassName("list-group-item")
// console.log(list[2].style.backgroundColor = 'green')
// for(i of list){
//     i.style.fontWeight = 'bold'
// }
// console.log(document.getElementsByClassName('list-group')[0].children[4].textContent = "Modified by Class Name")
// console.log(document.getElementsByTagName('li')[4].textContent = 'Modified by Tagname')




// console.log(document.querySelector('.list-group').childNodes[5].style.backgroundColor = 'red')
// console.log(document.querySelector('.list-group').childNodes[5].style.display = 'None')

// let item  = document.querySelectorAll(".list-group")
// console.log(item[0].children[1].style.backgroundColor = 'green')

// let item  = document.querySelectorAll(".list-group")[0].children
// console.log(item.length)
// for(let i=0;i<item.length;i=i+2){
//     item[i].style.backgroundColor = 'green'
// }

const newDiv = document.createElement('div')
newDiv.className = 'items'
newDiv.id = 'item'
let newDivText = document.createTextNode("Hello World")
newDiv.appendChild(newDivText)
newDiv.setAttribute('title','Text Appended before header')
let container = document.querySelector('.container')
console.log(container)
let h1 = document.querySelector('header h1')
container.insertBefore(newDiv,h1)

let firstDiv  = document.createElement('div')

firstDiv.id = 'firstDivId'

let firstDivDicText = document.createTextNode('Text before items')
firstDiv.appendChild(firstDivDicText)

let temp = (document.querySelector('#items'))

let container_01 = document.querySelector("#main")
console.log(container_01)
container_01.insertBefore(firstDiv,temp)
