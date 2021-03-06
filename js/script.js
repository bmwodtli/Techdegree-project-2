/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// select student-item and store in variable
const studentItem = document.querySelectorAll('.student-item');
let firstPage = 1;
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

// define appendPageLinks function
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
  for(let i=1;i<=numOfPages;i++){
  const li = document.createElement('li');
  if(i === 1){
  li.className = 'active';}
  linkList.appendChild(li);
  const aTag = document.createElement('a');
  aTag.setAttribute('href','#');
  aTag.textContent = i;
  li.appendChild(aTag);
}

//add an event listener to each a tag. When clicked they call the showPage function and display correct page
 linkList.addEventListener("click",(e)=>{
  let displayPage = e.target.textContent;
  showPage(studentItem,displayPage);

//loop over the pagination links to remove the active class from all the links
  const pagLinks = document.querySelectorAll('a');
  for(let i =0;i<pagLinks.length;i++){
  pagLinks[i].classList.remove('active');
}
//add the active class to the link that was just clicked. Can identify that clicked link using event.target
 e.target.className = 'active';

});
}
// call functions
showPage(studentItem,firstPage);
appendPageLinks(studentItem);
