// get inputs from user
let info_form = document.querySelector("#book-form");

// check value is not empty
let book_title = document.querySelector("#title");
let book_author = document.querySelector("#author");
let book_year = document.querySelector("#year");

function formchecker(e) {
  if (!book_title.value) {
    e.preventDefault();
    alert("book title can not be empty !");
    return;
  } else if (!book_author.value) {
    e.preventDefault();
    alert("book author name can not be empty !");
    return;
  } else if (!book_year.value || isNaN(book_year.value)) {
    e.preventDefault();
    alert("book year is empty or is not a number !");
    return;
  } else {
    e.preventDefault();
    console.log("success !");
    addInformation(book_title.value, book_author.value, book_year.value);
    book_title.value ='';
    book_author.value ='';
    book_year.value ='';
  }
}

function addInformation(Btitle, Bname, Byear) {
  let booklists = document.querySelector("#book-list");
  let trtag = document.createElement("tr");
  let thtag1 = document.createElement("th");
  thtag1.innerHTML = Btitle;
  let thtag2 = document.createElement("th");
  thtag2.innerHTML = Bname;
  let thtag3 = document.createElement("th");
  thtag3.innerHTML = Byear;
  trtag.appendChild(thtag1);
  trtag.appendChild(thtag2);
  trtag.appendChild(thtag3);
  booklists.append(trtag);

  // local storage

  let info_object = {
    title:Btitle,
    name:Bname,
    year:Byear,
  }

  let myarray = JSON.parse(localStorage.getItem('key'));

  myarray.push(info_object);

  localStorage.setItem('key',JSON.stringify(myarray));

  console.log(myarray);

}

// show when loaded on local storage !

let getitemsfromLocalstorage = JSON.parse(localStorage.getItem('key'));

let arraylength = getitemsfromLocalstorage.length;

let mainappendedtag = document.querySelector("#book-list");
for(let i = 0; i < arraylength ; i++){
  let trtag = document.createElement('tr');
  let thtag1 = document.createElement('th');
  let thtag2 = document.createElement('th');
  let thtag3 = document.createElement('th');

  thtag1.innerHTML = getitemsfromLocalstorage[i].title;
  thtag2.innerHTML = getitemsfromLocalstorage[i].name;
  thtag3.innerHTML = getitemsfromLocalstorage[i].year;

  trtag.appendChild(thtag1);
  trtag.appendChild(thtag2);
  trtag.appendChild(thtag3);
  mainappendedtag.append(trtag);
}



