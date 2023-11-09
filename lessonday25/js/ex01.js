
var header = document.createElement('header');
var h1 = document.createElement('h1');
h1.textContent = 'welcome to my website';
header.appendChild(h1);

var main = document.createElement('main');
var p1 = document.createElement('p');
p1.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, veritatis?';
main.appendChild(p1);

var footer = document.createElement('footer');
var p2 = document.createElement('p');
p2.textContent = 'Lorem ipsum dolor sit amet.';
footer.appendChild(p2);
document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);
