const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galEl = document.querySelector('.gallery');
// for (const image of images) {
//   const galleryEL = document.querySelector('.gallery');
//   galleryEL.style.display = 'flex';
//   galleryEL.style.gap = '60px';
//   galleryEL.style.padding = '60px';
//   galleryEL.insertAdjacentHTML(
//     'afterbegin',
//     `<li><img src='${image.url}' alt='${image.alt}' width = '250px' height = '125px'></li>`
//   );
  
// }


const galleryEl = document.querySelector('.gallery');

const listGallery = item => {
  return `<li>
    <img src="${item.url}" alt="${item.alt}"width='500'/>
  </li>`;
};

galleryEl.style.cssText = `
display: flex; 
flex-wrap: wrap; 
align-items: center;
list-style:none;
justify-content:space-between;`

const markup = images.map(listGallery).join('');

galleryEl.insertAdjacentHTML('beforeend', markup);

