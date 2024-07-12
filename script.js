function handleClick(element, figure) {
  const children = element.children;
  for (let i = 0; i < children.length; i++) {
    children[i].addEventListener('click', function() {
      for (let j = 0; j < children.length; j++) {
        if (children[j] === children[i]) {
          children[j].classList.add('active');
          figure.children[0].src = children[j].getAttribute('image-src');
          figure.children[1].textContent = children[j].getAttribute('image-title');
        } else {
          children[j].classList.remove('active');
        }
      }
    });
  }
}

function addElements(imageList, galleryList) {
  imageList.forEach(image => {
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = image.small;
    li.setAttribute('image-src', image.large)
    li.setAttribute('image-title', image.title)
    li.append(img);
    galleryList.append(li);
  })
}

const imageLinks = [
  {
    title: "Pink flowers",
    large: "images/flowers-pink-large.jpg",
    small: "images/flowers-pink-small.jpg",
  },
  {
    title: "Purple flowers",
    large: "images/flowers-purple-large.jpg",
    small: "images/flowers-purple-small.jpg",
  },
  {
    title: "Red flowers",
    large: "images/flowers-red-large.jpg",
    small: "images/flowers-red-small.jpg",
  },
  {
    title: "White flowers",
    large: "images/flowers-white-large.jpg",
    small: "images/flowers-white-small.jpg",
  },
  {
    title: "Yellow flowers",
    large: "images/flowers-yellow-large.jpg",
    small: "images/flowers-yellow-small.jpg",
  },
]

const galleryList = document.getElementById('gallery-list')
const figure = document.getElementById('gallery-figure')
addElements(imageLinks, galleryList);
handleClick(galleryList, figure);

galleryList.children[0].classList.add('active')
figure.children[1].textContent = imageLinks[0].title