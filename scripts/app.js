const addForm = document.querySelector('.add'); // create a variable to hold the input from the input field
const list = document.querySelector('.todos');


//creating a function to update the to do list with the user entry in the input field. outside of function to make it more versatile and usable
const generalTemplate = todo => {       // no parenthesis b/c one argument


//creating a new li tag for each user entered value on the submit event inside a new variable to be used to add each newly entered to do to the bottom of the to do list
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="fas fa-clipboard-check check"></i>
        </li>
    `;
    list.innerHTML += html //take html and append it to the list
};


// adding an event listener for the submit action
addForm.addEventListener('submit', e=>{


// prevent the page from reloading by default and create a variable to hold the user entries 
    e.preventDefault();
    const todo = addForm.add.value.trim(); //note .trim removes the white space from a user input string 

    if(todo.length){ //if length is a postive value it evaluates to true and runs the created function below it, will not run with empty submit
    generalTemplate(todo); //generating an html template from the function and then passing the todo variable inside it
    addForm.reset(); // use this method for forms queried on the dom to reset all the input fields inside that specific form 
    }
});