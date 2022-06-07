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

// const newDiv = document.createElement('div')
// newDiv.className = 'items'
// newDiv.id = 'item'
// let newDivText = document.createTextNode("Hello World")
// newDiv.appendChild(newDivText)
// newDiv.setAttribute('title','Text Appended before header')
// let container = document.querySelector('.container')
// console.log(container)
// let h1 = document.querySelector('header h1')
// container.insertBefore(newDiv,h1)

// let firstDiv  = document.createElement('div')

// firstDiv.id = 'firstDivId'

// let firstDivDicText = document.createTextNode('Text before items')
// firstDiv.appendChild(firstDivDicText)

// let temp = (document.querySelector('#items'))

// let container_01 = document.querySelectorAll(".container")[1].children[0]
// console.log(container_01)
// container_01.insertBefore(firstDiv,temp)
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var itemDesc = document.getElementById('description');


// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event


// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newItem1 = document.getElementById('description').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  
  li.appendChild(document.createTextNode(newItem))
 
    li.appendChild(document.createTextNode("  Description:"+ newItem1))

  
  let mod = document.getElementsByClassName("list-group-item")
  mod = Array.from(mod)
  console.log(mod.length)


  
  

  // Create del button element
 
  var deleteBtn = document.createElement('button');
  var editBtn = document.createElement('button')

  // Add classes to del button
  
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editBtn.className = 'btn btn-sm float-right edit'

  // Append text node
  
  deleteBtn.appendChild(document.createTextNode('X'));
  editBtn.appendChild(document.createTextNode("Edit"))

  // Append button to li
  
  li.appendChild(deleteBtn);
  li.append(editBtn)

  // Append li to list
  itemList.appendChild(li);
}       

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}




let test = document.querySelector(".list-group").children   

for(let i of test)
{
    i.innerHTML+='<button class="btn btn-sm float-right edit">Edit</button>'
}
filter.addEventListener('keyup', filterItems);
function filterItems(e){
    
    var text = e.target.value.toLowerCase();    
  
    var items = itemList.getElementsByTagName('li');
    
    
    var arr = Array.from(items)
    arr.forEach(function(item){
      var itemName = item.textContent;
      if(itemName.toLowerCase().indexOf(text)==0){
        console.log(itemName.split(" ")[1])
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  var itemsTest = document.getElementsByTagName('li');
  //console.log(itemsTest[0].style.display = 'block')

