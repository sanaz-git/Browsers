//it hasn't completed yet!!

function bookList(){
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const headTitle = document.createElement('h1');
  headTitle.textContent = 'Book List'
  // headTitle.style.fontSize = "50px";
  // headTitle.style.fontFamily = "cursive";
  // headTitle.style.paddingLeft = "70px";
  document.body.appendChild(headTitle)

  const ulElement = document.createElement('ul');
  list.style.display = "flex";
  list.style.flexWrap = "wrap";
  document.body.appendChild(ul);

  for (let i=0; i < myBooks.length ; i++){


    const liElement = document.createElement('li');
    liElement.style.listStyle = "none";
    liElement.style.padding = "25px";
    liElement.style.margin = "25px";
    liElement.style.width = "400px";
    liElement.style.borderRadius = "25px"
    ulElement.appendChild(liElement);

    const pElement = document.createElement('p');
    pElement.textContent = `${myBooks[i].title} - ${myBooks[i].author}`;
    liElement.appendChild(pElement);

   
    const imgElement = document.createElement('img');
    imgElement[i] = new Image();
    imgElement[i].src = 'imgElement.png' ;
    imgElement[i].style.paddingTop = "20px";
    liElement.appendChild(imgElement[i]);  

  }
}

bookList();
