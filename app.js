
const cuadrado0 = document.getElementById("cuadrado_0");
const cuadrado1 = document.getElementById("cuadrado_1");
const cuadrado2 = document.getElementById("cuadrado_2");
const cuadrado3 = document.getElementById("cuadrado_3");
const cuadrado4 = document.getElementById("cuadrado_4");
const cuadrado5 = document.getElementById("cuadrado_5");
const cuadrado6 = document.getElementById("cuadrado_6");
const cuadrado7 = document.getElementById("cuadrado_7");
const cuadrado8 = document.getElementById("cuadrado_8");


let arr = [null,null,null,null,null,null,null,null,null];

let i = 0;

console.log(arr)


function dibujar (value){

    let nombreCaja = "cuadrado_" + value;
    let valor = document.getElementById(nombreCaja);


    console.log(valor);
    const circle = document.createElement("i");
    circle.className += "bi bi-circle circulo";


    const cruz = document.createElement("i");
    cruz.className += "bi bi-asterisk cruz";

    if(arr[value] == null){
        if(i%2 == 0){
            arr[value] = circle;
        } else {
            arr[value] = cruz;
        }
        i++;
        console.log(i);
        console.log(arr);
        
    } else{
        valor.appendChild(arr[value]);
    }
    valor.appendChild(arr[value]);
    console.log(i);
        console.log(arr);

}

// cuadrado0.addEventListener("click", function(){


//     const circle = document.createElement("i");
//     circle.className += "bi bi-circle circulo";


//     const cruz = document.createElement("i");
//     cruz.className += "bi bi-asterisk cruz";

//     if(arr[0] == null){
//         if(i%2 == 0){
//             arr[0] = circle;
//         } else {
//             arr[0] = cruz;
//         }
//         i++;
//         console.log(i);
//         console.log(arr);
        
//     } else{
//         cuadrado0.appendChild(arr[0]);
//     }
//     cuadrado0.appendChild(arr[0]);
//     console.log(i);
//         console.log(arr);
// })

// cuadrado1.addEventListener("click", function(){
//     console.log(arr);
//     if(i%2 == 0){
//         cuadrado1.append(circle);
        
//     } else {
//         cuadrado1.appendChild(cruz);
//     }
//     i++;
//     console.log(i);
// })

// cuadrado2.addEventListener("click", function(){

//     if(i%2 == 0){
//         cuadrado2.appendChild(circle);
//     } else {
//         cuadrado2.appendChild(cruz);
//     }
//     i++;
//     console.log(i);
// })

// cuadrado3.addEventListener("click", function(){

//     if(i%2 == 0){
//         cuadrado3.appendChild(circle);
//     } else {
//         cuadrado3.appendChild(cruz);
//     }
//     i++;
//     console.log(i);
// })

// cuadrado4.addEventListener("click", function(){

//     if(i%2 == 0){
//         cuadrado4.appendChild(circle);
//     } else {
//         cuadrado4.appendChild(cruz);
//     }
//     i++;
//     console.log(i);
// })

// cuadrado5.addEventListener("click", function(){

//     if(i%2 == 0){
//         cuadrado5.appendChild(circle);
//     } else {
//         cuadrado5.appendChild(cruz);
//     }
//     i++;
//     console.log(i);
// })

// cuadrado6.addEventListener("click", function(){

//     if(i%2 == 0){
//         cuadrado6.appendChild(circle);
//     } else {
//         cuadrado6.appendChild(cruz);
//     }
//     i++;
//     console.log(i);
// })

// cuadrado7.addEventListener("click", function(){

//     if(i%2 == 0){
//         cuadrado7.appendChild(circle);
//     } else {
//         cuadrado7.appendChild(cruz);
//     }
//     i++;
//     console.log(i);
// })

// cuadrado8.addEventListener("click", function(){

//     if(i%2 == 0){
//         cuadrado8.appendChild(circle);
//     } else {
//         cuadrado8.appendChild(cruz);
//     }
//     i++;
//     console.log(i);
// })
