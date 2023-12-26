// variables declearations
let AddBtn = document.getElementById("AddBtn");
let PrintBtn = document.getElementById("PrintBtn");
let DeletBtn = document.getElementById("DeletBtn");
let Result = document.getElementById("Result");
// end variable declerations 

//start for funtion performing

// for Add btn funtion 
AddBtn.onclick = function () {
    debugger
    let NewName = prompt("enter your name")
    var usersLocalStorage = localStorage.getItem("users")

    if (usersLocalStorage == null) {
        if(NewName ==="")
        {
        return  alert("this name is not stored in locale storage because the new name is empty")
        }
        else
        {
        usersLocalStorage = [];
        usersLocalStorage.push(NewName)
        localStorage.setItem("users", JSON.stringify(usersLocalStorage))
        }
    }

    else {

        if(NewName ==="")
        {
        return  alert("this name is not stored in locale storage because the new name is empty")
        }

        let convertArray = JSON.parse(usersLocalStorage);
        convertArray.push(NewName);
        localStorage.setItem("users", JSON.stringify(convertArray))
    }

    Result.innerHTML = `<h2><b>${NewName}</b></h2><h4>have been stored in local storage</h4>`
}
//end for Add btn funtion 


// for print storage data
PrintBtn.onclick = function () {
    debugger
    var usersLocalStorage = localStorage.getItem("users")
    usersLocalStorage = JSON.parse(usersLocalStorage)

    if (!usersLocalStorage) {
        Result.innerHTML = `<h4>The lacal storage are nothing`
    }
    else {
        Result.innerHTML = `<h4>${usersLocalStorage}`
    }
}
// end for print storage data


// for delete data in locale storage
DeletBtn.onclick = function () {
    debugger
    var usersLocalStorage = localStorage.getItem("users")
    if (!usersLocalStorage) {
        Result.innerHTML = `<h4>Local storage already have nothing`
    }
    else {
        localStorage.removeItem("users")
        Result.innerHTML = `<h4>All Name Have Been Deleted In Storage`
    }
}
// end for delete data in locale storage

// end for funtion performing
