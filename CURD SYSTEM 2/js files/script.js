// start JS

// for toastify funtion
let notification = function (text, gravity, position, colour) {
    // debugger
    Toastify({
        text: text,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: gravity, // `top` or `bottom`
        position: position, // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: colour,
        },
        onClick: function () { } // Callback after click
    }).showToast();
}
// end toastify


//start variables declearitions

// for inputs and buttons
let firstName = document.getElementById("firstNameInput")
let lastName = document.getElementById("lastNameInput")
let email = document.getElementById("emailInput")
let phoneNumber = document.getElementById("phoneInput")
let message = document.getElementById("messageInput")
let addTask = document.getElementById("addTaskBtn")
let updateTask = document.getElementById("updateTaskBtn")
let result = document.getElementById("resultPlace")
let searchInput = document.getElementById("searchInput")
let searchBtn = document.getElementById("searchBtn")
let searchAndResult = document.getElementById("searchAndResult")
// let previousPageBtn = document.getElementById("previousPageBtn")
// let page1Btn = document.getElementById("page1Btn")
// let page2Btn = document.getElementById("page2Btn")
// let page3Btn = document.getElementById("page3Btn")
// let nextPageBtn = document.getElementById("nextPageBtn")
let firstNameSearchInput = document.getElementById("firstNameSearchInput")
let lastNameSearchInput = document.getElementById("lastNameSearchInput")
let emailSearchInput = document.getElementById("emailSearchInput")
let phoneSearchInput = document.getElementById("phoneSearchInput")
let searchBar = document.getElementById("searchBar")
// end input and button


// for current email
let currentEmail = '';
//end current email


// for email validation
let emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //camelCase  // PascalCase
// end email validation


//end variables declearitions




// empty input funtion
let emptyInput = function () {
    // debugger
    firstName.value = "", lastName.value = "", email.value = "", phoneNumber.value = "", message.value = ""
}
// end empty inputs




// for users array
let users = [{
    "firstName": "muhammed",
    "lastName": "harris",
    "email": "harris@gmail.com",
    "phoneNumber": "03067366281",
    "message": "hellow muhammed harris"
},
{
    "firstName": "saim",
    "lastName": "ayub",
    "email": "saim@gmail.com",
    "phoneNumber": "03137506847",
    "message": "hy saim"
},
{
    "firstName": "baber",
    "lastName": "azam",
    "email": "baber@gmail.com",
    "phoneNumber": "03052019308",
    "message": "where are you baber"
},
{
    "firstName": "sohaib",
    "lastName": "maqsood",
    "email": "sohaib@gmail.com",
    "phoneNumber": "03017690337",
    "message": "sohaib have gone"
},
{
    "firstName": "khushdil",
    "lastName": "sha",
    "email": "khushdil@gmail.com",
    "phoneNumber": "03007943880",
    "message": "khushdil ap kha ho"
},
{
    "firstName": "iftekhar",
    "lastName": "ahmed",
    "email": "iftekhar@gmail.com",
    "phoneNumber": "03007978554",
    "message": "hello iftekhar ahmed"
},
{
    "firstName": "shadab",
    "lastName": "khan",
    "email": "shadab@gmail.com",
    "phoneNumber": "03027600702",
    "message": "shadab is alrounder"
},
{
    "firstName": "imad",
    "lastName": "waseem",
    "email": "imad@gmail.com",
    "phoneNumber": "03056743820",
    "message": "imad have gone"
},
{
    "firstName": "muhammed",
    "lastName": "nawaz",
    "email": "nawaz@gmail.com",
    "phoneNumber": "03043753860",
    "message": "hello nawaz bhai"
},
{
    "firstName": "naseem",
    "lastName": "sha",
    "email": "naseem@gmail.com",
    "phoneNumber": "03006244220",
    "message": "naseem are bowler"
},
{
    "firstName": "shaheen",
    "lastName": "afridi",
    "email": "shaheen@gmail.com",
    "phoneNumber": "03256743828",
    "message": "shaheen have gone"
},
{
    "firstName": "haris",
    "lastName": "rauf",
    "email": "haris@gmail.com",
    "phoneNumber": "03427382930",
    "message": "haris have gone marid"
}
];
// end users array



// usersArray sorting funtion
function usersArraySorting() {
    // debugger
    users.sort((a, b) => {
        let fa = a.firstName.toLowerCase(),
            fb = b.firstName.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
}
// end usersArray sorting funtion



// start the coding for paginations


// this code for create a new array and default page limit
var currentPage = 1;
let page = 1
let currentLimitNumber = 12

// for starting index and ending endex
let startIndex = (page - 1) * currentLimitNumber;
let endIndex = startIndex + currentLimitNumber;
// end


let usersLengthDividedByPageLimit = users.length / currentLimitNumber
let usersLengthDividedByPageLimitInToRound = Math.ceil(usersLengthDividedByPageLimit)
let newArray = users.slice(startIndex, endIndex);
// ending code for creating a new array and default page limit

// this code for select page limit
var pageLimitNumber = document.getElementById('pageLimitNumber');
pageLimitNumber.addEventListener('change', function () {
    debugger
    currentLimitNumber = parseInt(pageLimitNumber.value);
    startIndex = (1 - 1) * currentLimitNumber;
    endIndex = startIndex + currentLimitNumber;
    usersLengthDividedByPageLimit = users.length / currentLimitNumber
    usersLengthDividedByPageLimitInToRound = Math.ceil(usersLengthDividedByPageLimit)

    //    default users array sorting
    usersArraySorting()
    // end default users array sorting

    newArray = users.slice(startIndex, endIndex);
    pagination();
    makeData(1);
    NextPage();
    PreviousPage();
    showData(newArray);
});
// end for select limit page number



function pagination() {
    debugger
    let htmlBlock = `<nav aria-label="..."><ul class="pagination">`
    htmlBlock += `<li class="page-item"><a class="page-link"  onclick="PreviousPage()" id="previousBtn">Previous</a></li>`
    let activeClass = "";
    for (i = 1; i <= usersLengthDividedByPageLimitInToRound; i++) {
        if (i == 1) {
            activeClass = "active"
        }
        else {
            activeClass = ""
        }
        htmlBlock += `<li class="page-item ${activeClass}" aria-current="page"><a class="page-link" onclick="numberFuntion(${i})" id="numberBtn">${i}</a></li>`
    }
    htmlBlock += `<li class="page-item"><a class="page-link" onclick="NextPage()" id="nextBtn">Next</a></li>`;
    htmlBlock += `</ul></nav>`;
    document.getElementById('paginations').innerHTML = htmlBlock;
    newArraySorting()
    cursorPointer();
}


function makeData(currentPage) {
    debugger
    page = currentPage;
    startIndex = (page - 1) * currentLimitNumber;
    endIndex = startIndex + currentLimitNumber;
    newArray = users.slice(startIndex, endIndex);

    newArraySorting()
    showData(newArray);
}


let NextPage = function () {
    // debugger
    // const totalPages = Math.round(users.length / currentLimit);  
    if (currentPage < usersLengthDividedByPageLimitInToRound) {
        currentPage++;
        newArraySorting()
        makeData(currentPage)
    }
}


let PreviousPage = function () {
    // debugger
    // const totalPages2 = Math.round(users.length / currentLimit);  
    if (currentPage > 1) {
        currentPage--;
        newArraySorting()
        makeData(currentPage)
    }
}


let numberFuntion = function (i) {
    // debugger        
    newArraySorting()
    makeData(i)
}


function cursorPointer() {
    // debugger
    let previousBtn = document.getElementById("previousBtn");
    let nextBtn = document.getElementById("nextBtn");
    let numberBtn = document.getElementById("numberBtn");

    previousBtn.style.cursor = "pointer";
    nextBtn.style.cursor = "pointer";
    numberBtn.style.cursor = "pointer";
    newArraySorting()
}



// end coding for paginations



// newArray sorting funtion
function newArraySorting() {
    // debugger
    newArray.sort((a, b) => {
        let fa = a.firstName.toLowerCase(),
            fb = b.firstName.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
}
// end newArray sorting funtion



// for bydefult user array sorting
usersArraySorting()
// end bydefult user array sorting

// for newArray sorting
newArraySorting()
// end newArray sorting


// for already data in list
showData(newArray);
//end for already data in list



// main funtion coding for crud



//for ShowData
function showData(array) {
    debugger

    result.innerHTML = '';

    let tableStartingCode = '<div class="table-responsive"><table class="table table-hover">'
    let tableEndingCode = '</table></div>'
    let tableHead =
        `<thead><tr>
        <th scope="col">#</th>
        <th scope="col">FIRST NAME</th> 
        <th scope="col">LAST NAME</th>
        <th scope="col">EMAIL ADDRESS</th>
        <th scope="col">PHONE NUMBER</th>
        <tr><thead>`
    let tableBoady = ""

    for (let i = 0; i < array.length; i++) {

        tableBoady += `<tr><th scope="row"> ${(i + 1)} </th>
             <td>${array[i].firstName}</td>
             <td>${array[i].lastName}</td>
             <td>${array[i].email}</td>
             <td>${array[i].phoneNumber}</td>
             <td>${array[i].message}</td>
             <td><button type='button' class='btn btn-info' onclick="editUser(${i})">EDIT</button>
             <button type='button' class='btn btn-danger' onclick="deleteUser('${array[i].email}')">DELETE</button></td></tr>`
    }
    let table = tableStartingCode + tableHead + "<tbody>" + tableBoady + "</tbody>" + tableEndingCode
    result.innerHTML = table;
    pagination()
    // end
}
// end showData



// for add task funtion 
function addData() {
    debugger

    if (!firstName.value || firstName.value.length < 1) {
        notification("please enter the first name correctely", "top", "right", "#dc143c")
        return firstName.focus(), firstName.value = "";
    }
    else if (!lastName.value || lastName.value.length < 1) {
        notification("please enter the last name correctely", "top", "right", "#dc143c")
        return lastName.focus(), lastName.value = "";
    }
    else if (!email.value || !email.value.match(emailValid)) {
        notification("please enter the email correctely", "top", "right", "#dc143c")
        return email.focus(), email.value = "";
    }
    else if (!phoneNumber.value || phoneNumber.value.length < 8) {
        notification("please enter the phone number correctely", "top", "right", "#dc143c")
        return phoneNumber.focus(), phoneNumber.value = "";
    }
    else if (!message.value || message.value.length < 1) {
        notification("please enter the first name correctely", "top", "right", "#dc143c")
        return message.focus(), message.value = "";
    }

    // for added user in array
    let newUser = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        message: message.value
    }
    // newUser.id  =  randomString;
    users.push(newUser)
    newArraySorting();
    usersArraySorting()
    notification("user has been successfully added in list", "bottom", "left", "#22b569");
    showData(newArray);
    emptyInput();


    currentLimitNumber = parseInt(pageLimitNumber.value);
    startIndex = (1 - 1) * currentLimitNumber;
    endIndex = startIndex + currentLimitNumber;
    usersLengthDividedByPageLimit = users.length / currentLimitNumber
    usersLengthDividedByPageLimitInToRound = Math.ceil(usersLengthDividedByPageLimit)

    //    default users array sorting
    usersArraySorting()
    // end default users array sorting
    newArray = users.slice(startIndex, endIndex);
    pagination();
    makeData(1);
    NextPage();
    PreviousPage();
    showData(newArray);
    // end for added user in array 


}
// end add funtion



// for add task btn
addTask.onclick = function () {
    debugger
    event.preventDefault();
    addData();
}
// end task btn



// for edit btn funtion
let editUser = function (i) {
    debugger
    firstName.value = newArray[i].firstName,
        lastName.value = newArray[i].lastName,
        email.value = newArray[i].email,
        phoneNumber.value = newArray[i].phoneNumber,
        message.value = newArray[i].message;
    currentEmail = email.value

    // button display none and block
    addTask.style.display = "none";
    updateTask.style.display = "block";
    // end
}
// end edit button funtion



// for update task btn
updateTask.onclick = function () {
    debugger

    let newObj = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        message: message.value
    }
    let index = newArray.findIndex((item) => item.email === currentEmail);

    newArray[index] = newObj;
    newArraySorting();
    showData(newArray)
    pagination()
    emptyInput()
    updateTask.style.display = "none"
    addTask.style.display = "block"
    notification("user data has been successfully update in list", "top", "left", "#22b569");
}
// end update btn



// for delete btn funtion
function deleteUser(inputEmail) {
    debugger
    let filteredData = users.filter((item) => {
        return item.email != inputEmail
    });

    users = filteredData;
    newArraySorting()
    showData(users);
    pagination()
    notification("user has been successfully delete in list", "bottom", "right", "#22b569");


    currentLimitNumber = parseInt(pageLimitNumber.value);
    startIndex = (1 - 1) * currentLimitNumber;
    endIndex = startIndex + currentLimitNumber;
    usersLengthDividedByPageLimit = users.length / currentLimitNumber
    usersLengthDividedByPageLimitInToRound = Math.ceil(usersLengthDividedByPageLimit)

    //    default users array sorting
    usersArraySorting()
    // end default users array sorting
    newArray = users.slice(startIndex, endIndex);
    pagination();
    makeData(1);
    NextPage();
    PreviousPage();
    showData(newArray);



    // for clear output when coloum is null
    if (!users.length) {
        searchAndResult.innerHTML = "";
    }
    // end clear output when coloum is null
}
// end delete button funtion


//end main funtion coding for crud








// for searching all coding

// for search btn
searchBtn.onclick = function () {
    debugger
    if (!searchInput.value) {
        notification("please enter the input field for searching the user", "bottom", "right", "#dc143c")
        searchInput.focus();
        return;
    }


    let filterSearchDataForFirstName = users.filter((item) => item.firstName === searchInput.value)
    let filterSearchDataForLastName = users.filter((item) => item.lastName === searchInput.value)
    let filterSearchDataForEmail = users.filter((item) => item.email === searchInput.value)
    let filterSearchDataForPhone = users.filter((item) => item.phoneNumber === searchInput.value)

    if (filterSearchDataForFirstName.length > 0) {
        showData(filterSearchDataForFirstName)
        searchInput.value = ""
        notification("user has been successfully search from users list", "bottom", "left", "#22b569")
    }
    else if (filterSearchDataForLastName.length > 0) {
        showData(filterSearchDataForLastName);
        searchInput.value = "";
        notification("user has been successfully search from users list", "bottom", "left", "#22b569");
    }
    else if (filterSearchDataForEmail.length > 0) {
        showData(filterSearchDataForEmail);
        searchInput.value = "";
        notification("user has been successfully search from users list", "bottom", "left", "#22b569");
    }
    else if (filterSearchDataForPhone.length > 0) {
        showData(filterSearchDataForPhone);
        searchInput.value = "";
        notification("user has been successfully search from users list", "bottom", "left", "#22b569");
    }
}
// end for search btn


// first Name Search Funtion
function firstNameSearchFuntion() {
    debugger
    let searchQueryForFirstName = document.getElementById("firstNameSearchInput")
    let filterFirstName = users.filter((item) => item.firstName.includes(searchQueryForFirstName.value));

    if (filterFirstName) {
        showData(filterFirstName)
    }

}
//end first Name Search Funtion


// first Name Search Funtion
function lastNameSearchFuntion() {
    debugger
    let searchQueryForLastName = document.getElementById("lastNameSearchInput")
    let filterLastName = users.filter((item) => item.lastName.includes(searchQueryForLastName.value));

    if (filterLastName) {
        showData(filterLastName)
    }

}
//end first Name Search Funtion


// first Name Search Funtion
function emailSearchFuntion() {
    debugger
    let searchQueryForEmail = document.getElementById("emailSearchInput")
    let filterEmail = users.filter((item) => item.email.includes(searchQueryForEmail.value));

    if (filterEmail) {
        showData(filterEmail)
    }

}
//end first Name Search Funtion


// first Name Search Funtion
function phoneSearchFuntion() {
    debugger
    let searchQueryForPhone = document.getElementById("phoneSearchInput")
    let filterphone = users.filter((item) => item.phoneNumber.includes(searchQueryForPhone.value));

    if (filterphone) {
        showData(filterphone)
    }

}
//end first Name Search Funtion

//end for search coding



// end JS