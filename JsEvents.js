
let para = document.getElementById("para");
para.addEventListener('mouseover', function run() {
    console.log('mouseinside');
}
)

para.addEventListener('mouseout', function run() {
    console.log('mouse went outside');
}
)



function toggleHide() {

    // let btn = document.getElementById("btn");
    // let para = document.getElementById("para");
    if (para.style.display != 'none') {
        para.style.display = 'none';
    }
    else {
        para.style.display = 'block';

    }
}
