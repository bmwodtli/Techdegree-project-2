/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/
const studentList = document.querySelectorAll('.student-list');
const studentItem = document.querySelectorAll('.student-item');
const studentDetails = document.querySelectorAll('.student-details');
const currentPage = ()=> {let page = 1;
return page;
}

const studentsPerPage = 10;
// define the showPage function to show list of 10 students per page.
const showPage = (list,page)=>{
// definition for the first and last indexes.
let fIndex = (page * studentsPerPage)-studentsPerPage;
let lIndex = fIndex + (studentsPerPage -1);
// loop through the list and display items from the list.
for(let i =0;i<list.length;i++){
  if(i>= fIndex && i<= lIndex){
  list[i].style.display = "block";
    }
  else{
  list[i].style.display = 'none';
    }
   }
   return list;
  }

/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/
const appendPageLinks = (list)=>{
// determine how many pages are needed
let numOfPages = Math.ceil(studentItem.length/studentsPerPage);
//create a div, give it the "pagination" class. and append to .page div
const pageDiv = document.querySelector('.page');
let newDiv = document.createElement('div');
newDiv.className = "pagination";
pageDiv.appendChild(newDiv);
let refNode = document.querySelector('ul');
refNode.after(newDiv);

//add ul to the "pagination" div to store pagination links
const linkList = document.createElement('ul');
linkList.classname = 'pagination';
newDiv.appendChild(linkList);
//for every page, add li and a tags with the page number text

//add an event listener to each a tag.When clicked they call the showPage function and display correct page

//loop over the pagination links to remove the active class from all the links

//add the active class to the link that was just clicked. Can identify that clicked link using event.target

}

showPage(studentItem,currentPage());


// Remember to delete the comments that came with this file, and replace them with your own code comments.
