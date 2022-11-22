let cards = [];
let count = 1
const cardList = document.querySelector(".cards");
let button = document.querySelector(".btn");



const countblogs = async (count) => {
  const res = await fetch(
    `https://www.wp-course.site/wp-json/youthink/posts?page=${count}`
  );
  const data = await res.json();
  var singleblog = data.data;
  cards.push(...singleblog);
  console.log(cards)
};


// getblogs();

const showCards = (singleblog) => {
  cardList.innerHTML = "";
  singleblog.map((item) => {
    cardList.innerHTML += `
    <div class="card">
    <img class="cardimg" src="${item.thumbnail}"
    alt="${item.slug}"/>
    <div class="incard">
    <h3>${item.title}</h3>
    <p>${item.excerpt}</p>

    <div class="tags"> <p><span class="material-symbols-outlined"> visibility </span>${item.views}/</p>
      <p><span class="material-symbols-outlined">calendar_month</span>${item.date}/</p>
      <p><span class="material-symbols-outlined">sell</span> ${item.tags}</p>
      </div>
      `;
  });

};
await countblogs(count);
showCards(cards);

button.addEventListener('click', async () => {
  if(count <= 3){
  count += 1 
  await countblogs(count)
  showCards(cards)
  }
  else button.remove()


  
})



cardList.addEventListener("click", (e) => {
  e.path.map((el) => {
    if (el.tagName == "IMG") {
      window.location.href = `http://127.0.0.1:5501/blog2.html?slug=${el.alt}`;
    }
  });
});