const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

//---------------------------BEGIN GALLERY CSS STYLES---------------------------
document.styleSheets[0].insertRule(
  ".gallery {display: flex; margin-left: -30px; padding-left: 0px; list-style: none;}"
);
document.styleSheets[0].insertRule(
  ".gallery--list {margin-left: 30px; flex-basis: calc(33.3333333333% - 30px);}"
);
document.styleSheets[0].insertRule(
  ".gallery--image {display: block; margin-top: 100px; width: 100%; height: 500px; object-fit: cover; box-shadow: 0 40px 50px rgba(0, 0, 0, 0.5);}"
);
document.styleSheets[0].insertRule(
  ".gallery--image:hover {margin-top: 0px; width: 50vw; height: 700px;}"
);
//----------------------------------END STYLES----------------------------------

const galleryHTML = document.querySelector(".gallery");

const imagesArray = images.map(({ url, alt }) => {
  return `<li class="gallery--list"><img src="${url}" alt="${alt}" class="gallery--image"></li>`;
});

galleryHTML.insertAdjacentHTML("afterbegin", imagesArray.join(""));
