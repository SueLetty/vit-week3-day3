function addList(){


    // create an element
    var li = document.createElement('li');
    //grab text from user input
    var inputValue = document.getElementById('input').value;
    // create a text node sign the user input in it
    var text = document.createTextNode(inputValue);
    // add the text node under the list item
    li.appendChild(text);
    
    
    if(inputValue === ""){  //check if user typed anyting, if not show alert message
        alert("You need to type somthing.");
    } else{ //user typed anything we add the user input in the ul.
        document.getElementById('myList').appendChild(li);
    }
    document.getElementById('input').value ="";
}