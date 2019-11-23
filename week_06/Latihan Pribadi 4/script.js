// // ambil body
// var body = document.body;

// // div id=main
// var mainDiv = document.createElement('div');
// mainDiv.setAttribute('id', 'main');
// body.appendChild(mainDiv);

// // div id=inside-main
// var insideMainDiv = document.createElement('div');
// insideMainDiv.setAttribute('id', 'inside-main');
// mainDiv.appendChild(insideMainDiv);

// // # Heading Sample 1
// var heading = document.createElement('h1');
// heading.textContent = 'Heading Sample 1';
// insideMainDiv.appendChild(heading);

// // button
// var button = document.createElement('button');
// button.textContent = 'Click Me!';
// button.addEventListener('click', () => alert('Hello!'));
// insideMainDiv.appendChild(button);

let mainDiv = document.getElementById('main');

// tambah div dengan id content
var contentDiv = document.createElement('div');
contentDiv.setAttribute('id', 'content');
mainDiv.appendChild(contentDiv);

function contentPost(parentDiv, judul, date) {
  let contentPost = document.createElement('div');
  contentPost.setAttribute('class', 'content-post');
  
  let h1 = document.createElement('h1');
  h1.textContent = judul;
  contentPost.appendChild(h1);

  let publishDate = document.createElement('span');
  publishDate.textContent = `Published on ${date}`
  contentPost.appendChild(publishDate);

  let p = document.createElement('p');
  p.textContent = 'Lorem Ipsum Dolor Sit Amet';
  contentPost.appendChild(p);

  let button = document.createElement('button');
  button.setAttribute('class', 'share-post-btn');
  button.textContent = 'Share this Post';
  button.addEventListener('click', () => alert('You have shared this post!'));
  contentPost.appendChild(button);
  
  parentDiv.appendChild(contentPost);
}

contentPost(contentDiv, 'Judul Post', '12 May 2016');
contentPost(contentDiv, 'Judul Post 2', '13 May 2016');