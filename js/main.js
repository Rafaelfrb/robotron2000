/*const robotron = document.querySelector('#robotron');*/
const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');
const braco = document.querySelector('#braco');



/*robotron.addEventListener("click", dizOi);*/
somar.addEventListener("click", (evento) =>  {
    braco.value = parseInt(braco.value) + 1;
});

subtrair.addEventListener("click", (evento) =>  {
    braco.value = parseInt(braco.value) - 1;
});

/*function dizOi() {
    console.log("oi");
}*/
