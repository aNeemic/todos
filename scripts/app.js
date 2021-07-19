const addForm = document.querySelector('.add'); // create a variable to hold the input from the input field
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');


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

//filter todo list
const filterTodos = term => {
    
    Array.from(list.children)   //create an array of items that DO NOT match
        .filter(todo=>!todo.textContent.toLowerCase().includes(term))     //note: switches the user input to lowercase for strict comparison reasons 
        .forEach(todo => todo.classList.add('filtered')) //Hide the unwanted todos (add filtered tag)

    Array.from(list.children) //creating a filtered array of the items that do match 
        .filter((todo)=> todo.textContent.toLowerCase().includes(term)) //note: switches the user input to lowercase for strict comparison reasons
        .forEach((todo) => todo.classList.remove('filtered')) // remove the filtered array
};  

// adding todos
addForm.addEventListener('submit', e=>{


// prevent the page from reloading by default and create a variable to hold the user entries 
    e.preventDefault();
    const todo = addForm.add.value.trim(); //note .trim removes the white space from a user input string 

    if(todo.length){    //if length is a postive value it evaluates to true and runs the created function below it, will not run with empty submit
    generalTemplate(todo); //generating an html template from the function and then passing the todo variable inside it
    addForm.reset();    // use this method for forms queried on the dom to reset all the input fields inside that specific form 
    }
});

//removing todos
list.addEventListener('click', e=> {

    if(e.target.classList.contains('check')){   //checks the class list of the target element to find the check class
        e.target.parentElement.remove();    //if true remove the item from the list
    } 
});

//keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase(); //grabbing whatever the user types into the search field, note: switches the user input to lowercase for strict comparison reasons
    filterTodos(term);
});
