let formName = document.getElementsByTagName("form")[0]
formName.addEventListener('submit',sendData)

function sendData(e)


{   e.preventDefault()
    let infoObj = {
    "Name": document.getElementById("fname").value,
    "Email": document.getElementById("email").value,
    "Phone": document.getElementById("phone").value,
    "Time":  document.getElementById("birthdaytime").value
    }
    
    let serializedObj = JSON.stringify(infoObj)
    localStorage.setItem("Info",serializedObj)
    
    
//     localStorage.setItem('The Name is',document.getElementById("fname").value)
//     localStorage.setItem('The Email is',document.getElementById("email").value)
//     localStorage.setItem('The Phone Number is',document.getElementById("phone").value)
//     localStorage.setItem('The Meeting time is',document.getElementById("birthdaytime").value)
// 
}
