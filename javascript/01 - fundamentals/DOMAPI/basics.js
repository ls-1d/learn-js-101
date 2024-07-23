document.body.append('Time');

// document.body.appendChild('hello'); // will not work

const timeEl = document.createElement('p');

timeEl.classList.add('time');

document.body.appendChild(timeEl);

function displayTime() {
    const date = new Date();
    let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    timeEl.textContent = time;
}

var timeInterval = setInterval(displayTime, 1000);

const button = document.createElement('button');
button.textContent = 'Click Me!';
document.body.appendChild(button);

button.addEventListener('click', function () {
    clearInterval(timeInterval);
});
