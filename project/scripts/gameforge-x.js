
const menuBtn = document.getElementById("menu");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.getElementById("currentYear").textContent = new Date().getFullYear();

document.querySelector("#lastModified span").textContent = document.lastModified;


const subscribeForm = document.getElementById("subscribeForm");
subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailInput = document.getElementById("email").value.trim();
  if (emailInput) {
    let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];
    if (!subscribers.includes(emailInput)) {
      subscribers.push(emailInput);
      localStorage.setItem("subscribers", JSON.stringify(subscribers));
      alert(`Thanks for subscribing! Welcome to the Forge, ${emailInput}`);
      subscribeForm.reset();
    } else {
      alert("You are already subscribed!");
    }
  }
});

const featuredArticles = [
  { title: "Gaming News", link: "news.html" },
  { title: "Gear Reviews", link: "reviews.html" },
  { title: "Tech Gadgets", link: "gadgets.html" }
];

featuredArticles.forEach(article => {
  console.log(`Check out the article: ${article.title} -> ${article.link}`);
});
