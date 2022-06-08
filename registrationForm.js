let formName = document.getElementsByTagName("form")[0]
let display = formName.addEventListener('submit',sendData)
let count_01 = 0


document.addEventListener('DOMContentLoaded', function(){
    for (let i = 0; i < localStorage.length; i++) {
        
        if(i==localStorage.length-1)

        {   
            console.log(i)
            const keyval = localStorage.key(i);
            
            const val = localStorage.getItem(keyval)
            let newVal = JSON.parse(val)
            
            document.getElementById("fname").value = newVal.Name
            console.log(newVal.Name)
        }
    
    }

}

)
function sendData(e)


{   
    count_01+=1
    e.preventDefault()
    let infoObj= {
    "Name": document.getElementById("fname").value,
    "Email": document.getElementById("email").value,
    "Phone": document.getElementById("phone").value,
    "Time":  document.getElementById("birthdaytime").value,
    "count_01":count_01
    
    }
    
    let serializedObj = JSON.stringify(infoObj)
    let newName = localStorage.setItem(infoObj.count_01,serializedObj)
    let reloadObj = localStorage.getItem(infoObj.count_01)
    let reloadString = JSON.parse(reloadObj)
    let li = document.createElement('li')
    li.className = 'listItems'
    li.appendChild(document.createTextNode(reloadString.Name + " " + 'Email is:' +  reloadString.Email))
    let mainClass = document.querySelector('#users')
    mainClass.appendChild(li)
  

    
    
    
    
    
    
//     localStorage.setItem('The Name is',document.getElementById("fname").value)
//     localStorage.setItem('The Email is',document.getElementById("email").value)
//     localStorage.setItem('The Phone Number is',document.getElementById("phone").value)
//     localStorage.setItem('The Meeting time is',document.getElementById("birthdaytime").value)
// 
    
}
// let reloadObj = localStorage.getItem("Info")
// let reloadString = JSON.parse(reloadObj)
// document.getElementById("fname").value = reloadString.Name
// document.getElementById("email").value = reloadString.Email
// document.getElementById("phone").value = reloadString.Phone
// document.getElementById("birthdaytime").value = reloadString.Time





