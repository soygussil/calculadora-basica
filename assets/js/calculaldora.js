/*declaramos las variables las cuales nos van a servir para leer las funciones que deseamos ejecutar, en este caso por cada signo o número, se ejecutará la función que le corresponda.
 */
let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));
/*
Acá hacemos una array function cada que demos click en un numero, en este caso cada etiqueta de html, se va a guardar en la variable buttons, y se va a convertir en un array, para poder usar la función map.
*/
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    //En este caso con un switch case, vamos a ejecutar cada función de la calculadora que elijamos, por ejemplo C para limpiar el display, por ejemplo + para sumar, etc.
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "←":
        if (display.innerText) {
          //En esta parte para poder ejecutar la función de eliminar o borrar utilizamos la función de slice que nos permite eliminar una parte de un string, en este caso la última letra del display.
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          //En esta parte vamos a evaluar el display, para poder evaluarlo, utilizamos la función eval, que nos permite evaluar un string, en este caso el display.
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "¡Error!";
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No hiciste la operación correcta.",
          });
        }
        break;
      default:
        display.innerHTML += e.target.innerText;
    }
  });
});
