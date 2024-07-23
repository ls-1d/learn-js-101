const containerEl = document.querySelector('.container');
const section_header = document.querySelector('.section-header');

const section_main = document.querySelector('.section-main');
const section_footer = document.querySelector('.section-footer');

const date = new Date().getFullYear();
const yearEl = document.querySelector('.year');
yearEl.textContent = date;

// let olEl = document.createElement('ol');
let olEl = document.querySelector('ol');
let olElType = olEl.getAttribute('type') || '';

let topics = ['Intro to DOM', 'Getting Elements', 'Querying the DOM', 'Creating Elements', 'Modifying Elements'];

topics.forEach((text, index) => {
    let li = document.createElement('li');
    li.setAttribute('data-index', index);
    li.textContent = text;
    olEl.appendChild(li);
});

const h1El = document.querySelector('h1');
const h1ElTextContent = h1El.textContent;
// console.log(h1ElTextContent);
h1El.setAttribute('title', h1ElTextContent + ' set in JS');

// section_main.insertAdjacentElement('afterend', olEl);
////////////////////////////////////////////////////////////

// classList, contains() add(), remove(), toggle(), replace()

// console.log(document.body.classList.contains('dark'));
// document.body.classList.toggle('dark');

///////////////////////////////////////////////////////////
// const scriptEl = document.querySelector('script');
// document.body.insertBefore(olEl, scriptEl);

// containerEl.insertAdjacentElement('beforeend', olEl);

let btnEl = document.querySelector('.btn');
btnEl.addEventListener('click', toggleTheme);
function toggleTheme() {
    document.body.classList.contains('dark')
        ? document.body.classList.remove('dark')
        : document.body.classList.add('dark');
}
