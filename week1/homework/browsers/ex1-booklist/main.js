//it hasn't completed yet!!


  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
      imgSrc: './img/imgElement0.jpg',
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
      imgSrc: './img/imgElement1.jpg',
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
      imgSrc: './img/imgElement2.jpg',
    },
  ];

  function bookList(){
  const headTitle = document.createElement('h1');
  headTitle.textContent = 'Book List'
  headTitle.style.fontSize = "50px";
  headTitle.style.paddingLeft = "60px";
  document.body.appendChild(headTitle)

  const ulElement = document.createElement('ul');
  ulElement.style.display = 'flex';
  ulElement.style.flexWrap = "wrap";
  document.body.appendChild(ulElement);
 

  for (let i=0; i < myBooks.length ; i++){


    const liElement = document.createElement('li');
    liElement.style.listStyle = "none";
    liElement.style.padding = "25px";
    liElement.style.margin = "25px";
    liElement.style.borderRadius = "25px"
    ulElement.appendChild(liElement);

    const pElement = document.createElement('p');
    pElement.textContent = `${myBooks[i].title} - ${myBooks[i].author}`;
    pElement.style.textAlign ="center";
    pElement.style.fontSize ="20px";
    
    liElement.appendChild(pElement);

    const imgElement = document.createElement("img");
    imgElement.src = myBooks[i].imgSrc;
    imgElement.style.width = "400px";
    imgElement.style.height = "400px";
    liElement.appendChild(imgElement);

 

    if (myBooks[i].alreadyRead === true) {
      liElement.style.backgroundColor = 'green';
    } else {
      liElement.style.backgroundColor = 'red';
    }  

  }
}

bookList();
