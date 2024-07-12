// Add an event listener to the gallery list
function handleClick(element, figure) {
  // Get all the children of the element
  const children = element.children;
  // Loop through each child
  for (let i = 0; i < children.length; i++) {
    // Add an event listener to each child
    children[i].addEventListener('click', function() {
      for (let j = 0; j < children.length; j++) {
        if (children[j] === children[i]) {
          // Add the active class to the clicked child
          children[j].classList.add('active');

          // Set the image source and title of the figure element
          figure.children[0].src = children[j].getAttribute('image-src');
          figure.children[1].textContent = children[j].getAttribute('image-title');
        } else {
          // Remove the active class from the other children
          children[j].classList.remove('active');
        }
      }
    });
  }
}

// Add elements to the gallery list
function addElements(imageList, galleryList) {
  // Loop through each image in the image list
  imageList.forEach(image => {
    // Create new elements
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = image.small;

    // Set the attributes of the elements to track large image and title
    li.setAttribute('image-src', image.large)
    li.setAttribute('image-title', image.title)

    // Append the elements to the list item
    li.append(img);

    // Append the list item to the gallery list
    galleryList.append(li);
  })
}

// Image links
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

// Get the gallery list and figure elements
const galleryList = document.getElementById('gallery-list')
const figure = document.getElementById('gallery-figure')

// Add the image links to the gallery list
addElements(imageLinks, galleryList);

// Add an event listener to the gallery list
handleClick(galleryList, figure);

// Set the first image as active
galleryList.children[0].classList.add('active')

// Set the image source and title of the figure element
figure.children[1].textContent = imageLinks[0].title