var input = document.getElementsByClassName('medium');


// input.addEventListener('click', ()=>{
//     console.log(input)
// })
//console.log(input);
//console.log(input.length)
for (let i = 0; i < input.length; i++) {
    
    //var par = input[i].parentElement;
    input[i].addEventListener('focus', function (){
      //  console.log(input[i]);
      //  input[i].setAttribute('contenteditable', false);
        input[i].parentNode.classList.add('active');
        input[i].parentElement.parentElement.previousElementSibling.classList.add('active');
        input[i].parentElement.nextElementSibling.classList.add('active');
        input[i].parentElement.parentElement.nextElementSibling?.classList.add('active');
    });


    input[i].addEventListener('blur', ()=>{
     //   input[i].setAttribute('contenteditable', true);
        input[i].parentNode.classList.remove('active');
      //  input[i].parentElement.parentElement.previousElementSibling.classList.remove('active')
        input[i].parentElement.nextElementSibling.classList.remove('active');
        input[i].parentElement.parentElement.nextElementSibling?.classList.remove('active');
        
         if (input[i].value == "") {
             input[i].parentElement.parentElement.previousElementSibling.classList.remove('active')
         }
    })
  }


  function checkval() {
    for (let cc = 0; cc < input.length; cc++) {
      const c = input[cc];
      
      if (c.value == '' || c.value == undefined) {
        c.parentElement.parentElement.parentElement.classList.add('error')
      }
      else {
        c.parentElement.parentElement.parentElement.classList.remove('error')
      }

    }
  }

console.log(input)

const tab = document.querySelectorAll('.accordion_content_list_row');
for (let j = 0; j < tab.length; j++) {
  const g = tab[j];
  
  for (let i = 0; i < tab.length; i++) {
    var h = tab[i];

    g.addEventListener('click', ()=>{
      if (i == j) {
      
        g.firstElementChild.classList.add('active');
        g.lastElementChild.setAttribute('style', 'display:block;');
      }
      else {
        g.firstElementChild.classList.remove('active')
        g.lastElementChild.setAttribute('style', 'display:none;');

      }
    })
    //console.log(h.classList)
  } 
}
