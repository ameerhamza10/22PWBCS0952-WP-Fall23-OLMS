
// Adding Books code portion

const title=document.getElementById("title");
const author=document.getElementById("author");
const ISBN=document.getElementById("ISBN");
const addBook=document.getElementById("added-book");
const addBtn=document.getElementById("add");



 
function bookDetails() {
    if(title.value === "" || author.value === "" || ISBN.value === ""){
        alert("Enter your complete Book details");    
    }
    
    else{
    let li = document.createElement("li");
    addBook.appendChild(li);
    li.innerHTML=` ${title.value} by ${author.value} <br> ISBN : ${ISBN.value}`;
    clearValueFromInput();
}

 function clearValueFromInput(){
    title.value="";
    author.value="";
    ISBN.value="";
}
}

// If books is available then shoe alert This book is available.....



// Searching Books Portion

const searchBox=document.getElementById("search-box");


function searchBook(){
    if(searchBox.empty())
    alert("empty")    
}