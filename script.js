const input = document.querySelector('.input-field');
const btn = document.querySelector('.btn');
const addList = document.querySelector('.add-list');
const close = document.querySelector('.close');



btn.addEventListener('click', function(){
    const paragraph = document.createElement('p');
    const paragraphx = document.createElement('p');

// empty vaule
    let empty = input.value.trim();
    if(empty !== '' ){
// creating list div
        paragraph.innerHTML = input.value;
        input.value = '';
        addList.appendChild(paragraph);
// creating delete div
        paragraphx.innerHTML = 'x';
        close.appendChild(paragraphx);
    }
    
// list function
    paragraph.addEventListener('click', function(){
        paragraph.classList.toggle('complete');
        if(paragraph.classList.contains('complete')){
            paragraph.style.color = 'red';
        }else{
            paragraph.style.color = 'black'
        }
    })

// delete function
    paragraphx.addEventListener('click', function(){

        addList.removeChild(paragraph);
        close.removeChild(paragraphx);
    })
})
// keyboard press









