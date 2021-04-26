console.log('selectors');
/*
element selector:
1. single element selector
2. multi element selector

*/
let element=document.getElementById("my");
//element=element.className;
//element=element.childNodes;
//  element=element.parentNode; 
//  element.style.color="blue";
// element.innerText='harry is good boy';
//console.log(element)
 //element.innerHTML='<b>rahul is good boy</b>';
 //console.log(element.innerHTML);
// console.log(element.innerText);

// let sel=document.querySelector('#my');
// sel=document.querySelector('.demo');
// sel=document.querySelector('div');
// sel.style.color="violet";
//  console.log(sel);


let elems=document.getElementsByClassName('demo');
 elems=document.getElementsByClassName('container');
console.log(elems[0].getElementsByClassName("demo"));
elems=document.getElementsByTagName('div');
console.log(elems);
for (let index = 0; index <elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color="red";
    

    
}

//  Array.from(elems).forEach(element=>{
//     console.log(element)
//     element.style.color="green";
// });
