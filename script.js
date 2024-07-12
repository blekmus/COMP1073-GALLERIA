// Add an event listener to the gallery list
function handleClick(element, figure) {
  // Get all the children of the element
  const children = element.children;
  // Loop through each child
  for (let i = 0; i < children.length; i++) {
    // Add an event listener to each child
    // Modify the JavaScript to include transition effects
    children[i].addEventListener('click', function () {
      // Loop through each child
      for (let j = 0; j < children.length; j++) {
        // Check if the child is the same as the clicked child
        if (children[j] === children[i]) {
          children[j].classList.add('active');
          const currentImg = figure.children[0];
          currentImg.classList.add('fade-out');

          // Fade in the image and set the image
          setTimeout(() => {
            currentImg.src = children[j].getAttribute('image-src');
            currentImg.classList.remove('fade-out');
            currentImg.classList.add('fade-in');
          }, 200);

          // Fade out the image
          setTimeout(() => {
            currentImg.classList.remove('fade-in');
          }, 400);

          // Set the image title of the figure element
          figure.children[1].textContent = children[j].getAttribute('image-title');
        } else {
          // Remove the active class from the child
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

// Start the slideshow
function startSlideshow() {
  slideshowInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % galleryList.children.length;
    galleryList.children[currentIndex].click();
  }, interval);
}

// Reset the slideshow timer
function resetSlideshow() {
  clearInterval(slideshowInterval);
  startSlideshow();
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

// For lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const close = document.querySelector('.close');

// Variables for slideshow control
let currentIndex = 0;
const interval = 3000; // Set interval time in milliseconds
let slideshowInterval;

// Add the image links to the gallery list
addElements(imageLinks, galleryList);

// Add an event listener to the gallery list
handleClick(galleryList, figure);

// Set the first image as active
galleryList.children[0].classList.add('active')

// Set the image source and title of the figure element
figure.children[1].textContent = imageLinks[0].title

// Start the slideshow
startSlideshow();


// Event listeners

// Open the lightbox when an image is clicked
figure.addEventListener('click', function (event) {
  lightbox.style.display = 'flex';
  lightboxImg.src = event.target.src;
});

// Close the lightbox when the close button is clicked
close.addEventListener('click', function () {
  lightbox.style.display = 'none';
})

// Close the lightbox when the background of the image is clicked is clicked
lightbox.addEventListener('click', function (event) {
  if (event.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

galleryList.addEventListener('click', function (event) {
  if (event.target.tagName === 'IMG') {
    currentIndex = Array.from(galleryList.children).indexOf(event.target.parentElement);
    resetSlideshow();
  }
});
