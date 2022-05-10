var glabel = document.getElementsByClassName('gfield_label');
var firstname = document.getElementById('firstName');
var ginput = document.getElementsByClassName('ginput_container');
var formli = document.getElementsByClassName('form_body_li')
var selinp, inp;
// firstname.onclick = ()=>{
//     firstname.classList.add('active');
//     glabel.length;
//     alert(glabel[1].classList.add('active'));
//     alert(firstname.classList);
// }
//function activate(){
    for (let i = 0; i < glabel.length; i++) {
        for (let j = 0; j < formli.length; j++) {
        //ginput[i].classList.add('active');
        selinp = ginput[i].getElementsByTagName('input')[0];
        //alert(selinp.classList);
        selinp.addEventListener('click', function(){
              //  alert(formli.length)
              // glabel[i].classList.add('active');
               ginput[i].childNodes[j].classList.add('active');
               formli[i].childNodes[j].classList.add('active');
               
            })
            selinp.addEventListener('blur',function (){
                glabel[i].classList.remove('active');
                ginput[i].childNodes[j].classList.remove('active');
                formli[i].childNodes[j].classList.remove('active')
            } )
        }
    }
//}
