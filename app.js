const RATINGS = document.querySelectorAll(".rating"),
  RATINGS_CONTAINER = document.querySelector(".ratings-container"),
  SEND_BTN = document.getElementById("send"),
  PANEL = document.getElementById("panel");

let selected_Rating = "Satisfied";

RATINGS_CONTAINER.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    REMOVE_ACTIVE()
    e.target.parentNode.classList.add("active")
    selected_Rating = e.target.nextElementSibling.innerHTML
  }
});

SEND_BTN.addEventListener("click", (e)=> {
    PANEL.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you!</strong>
    <br>
    <strong>Feadback: ${selected_Rating}</strong>
    <p>We will use your feedback \to improve our customer support</p>
    <button class="btn redd" onclick="QUIT()">Quit</button>
    `
})


function REMOVE_ACTIVE() {
    for (let i=0; i<RATINGS.length; i++){
        RATINGS[i].classList.remove('active')
    }
}



function QUIT(){
    window.close();
}


