function handleOnLoad() //calls the populateList method and populates the array
{
    populateList();
}

function handleOnChange() //populates all the items in the list box to myBook
{
    const selectedId = document.getElementById("selectListBox").value;
    bookList.forEach((book)=>{
        if(book.id == selectedId){
            myBook = book;
        }
    });
    
    populateForm();
}

function handleEditClick()//handles the edit button on the index.html
{
    makeEditable();
    hideButtons();
    var buttonHtml = "<button class=\"btn btn-primary btn-lg\" onclick=\"handleEditSave("+myBook.id+")\">Save</button>"
    buttonHtml += "<button class=\"btn btn-warning btn-lg btn-cancel\" onclick=\"handleCancelSave()\">Cancel</button>"
    document.getElementById("saveButton").innerHTML = buttonHtml;
    document.getElementById("saveButton").style.display = "inline-block";
}

function handleNewClick()//handles creating a new book on the index.html
{
    makeEditable();
    hideButtons();
    blankFields();
    var buttonHtml = "<button class=\"btn btn-primary btn-lg\" onclick=\"handleNewSave()\">Save</button>"
    buttonHtml += "<button class =\"btn btn-warning btn-lg  btn-cancel\" onclick=\"handleCancelSave()\">Cancel</button>"
    document.getElementById("saveButton").innerHTML = buttonHtml;
    document.getElementById("saveButton").style.display = "inline-block";
}

function handleRentClick()//subtracts a copy to rent and rents a book to user
{
    myBook.numAvlb--;
    document.getElementById("bookAvlb").value = myBook.numAvlb;
    putBook(myBook.id);
}

function handleReturnClick()//adds the book back when user returns his copy
{
    myBook.numAvlb++;
    document.getElementById("bookAvlb").value = myBook.numAvlb;
    putBook(myBook.id);
}

function handleDeleteClick()//delete button 
{
    deleteBook();
}

function handleCancelSave()//cancel button and calls 3 methods to populate 
{
    populateForm();
    makeReadOnly();
    showButtons();
}

function handleEditSave(id) //edits book by ID 
{
    putBook(id);
    makeReadOnly();
    showButtons();
}

function handleNewSave() //handles any new save 
{
    postBook();
    makeReadOnly();
    showButtons();
    blankFields();
}

function populateForm() //populates the form with all the important values
{
    document.getElementById("bookTitle").value = myBook.title;
    document.getElementById("bookAuthor").value = myBook.author;
    document.getElementById("bookGenre").value = myBook.genre;
    document.getElementById("bookAvlb").value = myBook.numAvlb;
    document.getElementById("bookIsbn").value = myBook.isbn;
    document.getElementById("bookLength").value = myBook.length;
    document.getElementById("bookCover").value = myBook.cover;
    var html = "<img class = \"coverArt\" src= \"" + myBook.cover + "\"></img>";
    document.getElementById("picBox").innerHTML = html;
}

function hideButtons() //hides buttons when making using new
{
    document.getElementById("newButton").style.display = "none";
    document.getElementById("editButton").style.display = "none";
    document.getElementById("deleteButton").style.display = "none";
    document.getElementById("rentButton").style.display = "none";
    document.getElementById("returnButton").style.display = "none";
}

function showButtons() //shows all hidden buttons
{
    document.getElementById("newButton").style.display = "inline-block";
    document.getElementById("editButton").style.display = "inline-block";
    document.getElementById("deleteButton").style.display = "inline-block";
    document.getElementById("rentButton").style.display = "inline-block";
    document.getElementById("returnButton").style.display = "inline-block";
    document.getElementById("saveButton").style.display = "none";
}

function makeEditable() //disables read only so user can edit books
{
    document.getElementById("bookTitle").readOnly = false;
    document.getElementById("bookAuthor").readOnly = false;
    document.getElementById("bookGenre").readOnly = false;
    document.getElementById("bookAvlb").readOnly = false;
    document.getElementById("bookIsbn").readOnly = false;
    document.getElementById("bookLength").readOnly = false;
    document.getElementById("bookCover").readOnly = false;
}

function blankFields() //stores the value of the empty text box
{
    document.getElementById("bookTitle").value="";
    document.getElementById("bookAuthor").value="";
    document.getElementById("bookGenre").value="";
    document.getElementById("bookAvlb").value="";
    document.getElementById("bookIsbn").value="";
    document.getElementById("bookLength").value="";
    document.getElementById("bookCover").value="";
}

function makeReadOnly() //makes it so user can only edit when he clicks edit
{
    document.getElementById("bookTitle").readOnly=true;
    document.getElementById("bookAuthor").readOnly=true;
    document.getElementById("bookGenre").readOnly=true;
    document.getElementById("bookAvlb").readOnly=true;
    document.getElementById("bookIsbn").readOnly=true;
    document.getElementById("bookLength").readOnly=true;
    document.getElementById("bookCover").readOnly=true;
}