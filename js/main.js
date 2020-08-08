let btnSetBackground = document.getElementById('set-background ');

const setBackground = () => {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.second');

    p1.classList.add('background-red');
    p2.classList.add('background-yellow');

    
    // p1.style.backgroundColor = 'red';
    // p2.style.backgroundColor = 'yellow';  

    // p1.classList.toggle('background-red');
    // p2.classList.toggle('background-yellow');
}

btnSetBackground = addEventListener('click', setBackground)