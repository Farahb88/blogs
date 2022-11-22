let queryString = new URLSearchParams(window.location.href.split("?")[1]);
let singlecard = {};

var singlecardid = document.querySelector(".singlecard");
var slug = queryString.get("slug");


const getsingleblog = async () => {
  const res = await fetch(
    `https://www.wp-course.site/wp-json/youthink/post?slug=${slug}`
  );
  const data = await res.json();

  var singleblog = data.data;
  singlecard = {}
  singlecard = singleblog;
};
await getsingleblog();

console.log(singlecard)

const showCards = (singleblog) => {
  singlecardid.innerHTML = "";

  singlecardid.innerHTML = `
    
    <div class="graynav">
      <h1>${singleblog.title}</h1>
    </div>
    <div class="card">
    <img class="cardimg" src="${singleblog.thumbnail}"alt="${singleblog.slug}"/>
    <div class="incard">
    <h3>${singleblog.title}</h3>
    <p>${singleblog.excerpt}</p>
    <div class="tags"> <p><span class="material-symbols-outlined"> visibility </span>${singleblog.views}/</p>
      <p><span class="material-symbols-outlined">calendar_month</span>${singleblog.date}/</p>
      <p><span class="material-symbols-outlined">sell</span> ${singleblog.tags}</p>
      </div>
      `;
};

showCards(singlecard);
