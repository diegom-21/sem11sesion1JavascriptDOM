//getElementById
const demoPara = document.getElementById('demoPara');
demoPara.textContent = 'Este párrafo fue modificado con getElementById';

//querySelector
const demoDiv = document.querySelector('#demoDiv');
demoDiv.innerHTML += '<p>Este párrafo fue agregado con querySelector</p>';

//querySelectorAll
const listItems = document.querySelectorAll('li');
listItems.forEach((item, index) => {
    item.textContent = `Elemento ${index + 1} modificado con querySelectorAll`;
});

//textContent
demoDiv.textContent += ' - Este texto fue agregado con textContent';

//innerHTML
demoDiv.innerHTML += '<div id="innerDiv">Este es un div interno</div>';

//property style
const innerDiv = document.getElementById('innerDiv');
innerDiv.style.backgroundColor = 'lightblue';
innerDiv.style.padding = '10px';

//property classList.add
innerDiv.classList.add('rounded-border');

//property classList.remove
innerDiv.classList.remove('rounded-border');

//parentElement
console.log(demoPara.parentElement);

//nextElementSibling
console.log(demoPara.nextElementSibling);

//children
console.log(demoDiv.children);

//createElement
const newElement = document.createElement('p');
newElement.textContent = 'Este párrafo fue creado con createElement';
demoDiv.appendChild(newElement);
