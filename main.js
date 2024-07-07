
let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);
console.log(height);

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});


let section =document.querySelector(".flachen-form");
let spans =document.querySelectorAll(".progress span");
let spanup =document.querySelector(".up");


window.onscroll = function ()  {

  if(this.scrollY >=300){
    spanup.classList.add("show")
  }else{
     spanup.classList.remove("show")
    }

if(window.scrollY >= section.offsetTop+30){
  spans.forEach((span)=>{
  span.style.width = span.dataset.width;
}
);};}

// window.onscroll =function(){
  //   spanup.classList.toggle("show", window.scrollY >= 300)
  // this.scrollY >=300 ? spanup.classList.add("show"):spanup.classList.remove("show");
// };
spanup.onclick = function(){
  window.scrollTo({
    top:0,
    behavior:"smooth",
  });
};





