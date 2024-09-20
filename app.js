// Data array
const data = [
  {
    name: 'Veggie Delight',
    imageSrc:
      'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg',
    time: '30 min',
    type: 'veg',
    isLiked: false,
    rating: 4.2,
  },
  {
    name: 'Chicken Grill',
    imageSrc:
      'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg',
    time: '45 min',
    type: 'non-veg',
    isLiked: false,
    rating: 4.5,
  },
  {
    name: 'Cheese Pizza',
    imageSrc:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    time: '40 min',
    type: 'veg',
    isLiked: false,
    rating: 4.1,
  },
  {
    name: 'Steak',
    imageSrc:
      'https://static01.nyt.com/images/2021/02/17/dining/17tootired-grilled-cheese/17tootired-grilled-cheese-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
    time: '60 min',
    type: 'non-veg',
    isLiked: false,
    rating: 4.7,
  },
  {
    name: 'Cheese Pizza',
    imageSrc:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    time: '40 min',
    type: 'veg',
    isLiked: false,
    rating: 4.1,
  },
  {
    name: 'Steak',
    imageSrc:
      'https://static01.nyt.com/images/2021/02/17/dining/17tootired-grilled-cheese/17tootired-grilled-cheese-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
    time: '60 min',
    type: 'non-veg',
    isLiked: false,
    rating: 4.7,
  },
  {
    name: 'Cheese Pizza',
    imageSrc:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    time: '40 min',
    type: 'veg',
    isLiked: false,
    rating: 4.1,
  },
  {
    name: 'Steak',
    imageSrc:
      'https://static01.nyt.com/images/2021/02/17/dining/17tootired-grilled-cheese/17tootired-grilled-cheese-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
    time: '60 min',
    type: 'non-veg',
    isLiked: false,
    rating: 4.7,
  },
  {
    name: 'Cheese Pizza',
    imageSrc:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    time: '40 min',
    type: 'veg',
    isLiked: false,
    rating: 4.1,
  },
  {
    name: 'Steak',
    imageSrc:
      'https://static01.nyt.com/images/2021/02/17/dining/17tootired-grilled-cheese/17tootired-grilled-cheese-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
    time: '60 min',
    type: 'non-veg',
    isLiked: false,
    rating: 4.7,
  },
  {
    name: 'Cheese Pizza',
    imageSrc:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    time: '40 min',
    type: 'veg',
    isLiked: false,
    rating: 4.1,
  },
  {
    name: 'Steak',
    imageSrc:
      'https://static01.nyt.com/images/2021/02/17/dining/17tootired-grilled-cheese/17tootired-grilled-cheese-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
    time: '60 min',
    type: 'non-veg',
    isLiked: false,
    rating: 4.7,
  },
  // ... Add other items from the data array
];

// Function to display the cards
const displayCards = () => {
  const contentBar = document.getElementById('contentBar');

  data.forEach((item) => {
    // Create the card element
    const card = document.createElement('div');
    card.classList.add('Card');
    card.innerHTML = `
      <img style="border-radius: 20px" src="${item.imageSrc}" alt="${item.name}" height="240px" width="350px" />
      <p id="foodcategory">${item.type}</p>
      <div id="dishDetails">
        <p id="dishName">${item.name}</p>
        <p>⭐ ${item.rating}</p>
      </div>
      <div id="timeContainer">
        <p>${item.time}</p>
      </div>
    `;

    // Append the card to the contentBar
    contentBar.appendChild(card);
  });
};

// Call the function to display the cards
displayCards();
