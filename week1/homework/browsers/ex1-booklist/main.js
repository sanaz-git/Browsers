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
  headTitle.style.paddingLeft = "0";
  document.body.appendChild(headTitle)

  const ulElement = document.createElement('ul');
  ulElement.style.display = 'flex';
  ulElement.style.flexWrap = "wrap";
 
  document.body.appendChild(ulElement);

  for (let i=0; i < myBooks.length ; i++){


    const liElement = document.createElement('li');
    liElement.style.listStyle = "none";
    // liElement.style.padding = "25px";
    // liElement.style.margin = "25px";
    liElement.style.width = "300px";
    liElement.style.borderRadius = "25px"
    ulElement.appendChild(liElement);

    const pElement = document.createElement('p');
    pElement.textContent = `${myBooks[i].title} - ${myBooks[i].author}`;
    liElement.style.width = "300px";
    // pElement.style.margin ="5px";
    ulElement.appendChild(pElement);

    const imgElement = document.createElement("img");
    imgElement.src = myBooks[i].imgSrc;
    imgElement.setAttribute('alt', myBooks[i].title);
    imgElement.style.display = 'block';
    // imgElement.style.height = '400px';
    imgElement.style.marginLeft = 'auto';
    imgElement.style.marginRight = 'auto';
    imgElement.style.marginBottom = '20px';
    imgElement.style.width = '70%';
    liElement.appendChild(imgElement);


   
    

  }
}

bookList();
