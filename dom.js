// console.log('connect');
// console.log(document.getElementsByTagName('h1'));


const h1collection = document.getElementsByTagName('h1')

// h2collection =[h1,h1,h1,h1]
for (const h1 of h1collection){
    console.log(h1);
    h1.style.color = 'yellow'
    h1.style.fontWeight = 'bold'
    h1.style.textDecoration = 'underline'
    h1.style.textShadow ='3px 3px 3px red'

}



// console.log(h1collection);
// first you have to get the parent field


const Containar = document.getElementById('Containar')

 const ulContainar = document.createElement('ul')
const li1 = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')
li1.innerText='sopnoPure';
li2.innerText='vinnoJogo';
li3.innerText='nil Shagor';
ulContainar.appendChild(li1);
ulContainar.appendChild(li2);
ulContainar.appendChild(li3);
Containar.appendChild(ulContainar)




// shortcut

const sectionContainer2 = document.getElementById('Container2')
  
const div = document.createElement('div')
div.innerHTML = `
       <li>bureBad</li>
       <li>tidtaBad</li>
       <li>tista</li>

`
sectionContainer2.appendChild(div)
// shortcut 2


const sectionConntainer2 = document.getElementById('Conntainer2')
  
const ul = document.createElement('ul')
ul.innerHTML = `
       <li>bureBad</li>
       <li>tidtaBad</li>
       <li>tista</li>

`
sectionConntainer2.appendChild(ul)

