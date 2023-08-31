const buttons = document.querySelectorAll("#imagem-picker li");
const image = document.querySelector("#producto-image");

buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
      //  console.log(e)

        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected")
        });

        const button = e.target;

        const id = button.getAttribute("id");
        

        button.querySelector(".color").classList.add("selected");

        image.classList.add("changing");
        image.setAttribute("src", ` img/iphone_${id}.jpg`);
        setTimeout(() =>{
            image.classList.toggle("changing");
        }, 300)

        
    }); 
});