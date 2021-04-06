let button = document.querySelector('button');




function changeBackground() {

    document.body.style.backgroundColor = 'red';
    button.value = 'I\'m not red';

    setTimeout(()=>{
        document.body.style.backgroundColor = 'rgb(157, 240, 240)';
        button.value = 'hello button';
    },2000);

}







button.addEventListener('click',changeBackground);























