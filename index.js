let turnX = 'x';
let turnO = 'o';
let turn = turnX;

let i = 1;

let myElmnt = [];

for (let i = 1; i < 10; i++) {
    
    myElmnt[i]=document.getElementById('item'+i);

}

document.querySelectorAll('.square').forEach((e)=>{

    e.onclick=function(){

        document.querySelector('.game .title').innerHTML='X';
        if(i%2===1){
            turn=turnX;
            document.querySelector('.game .title').innerHTML='O';
            i++;
        }else{
            turn=turnO;
            document.querySelector('.game .title').innerHTML='X';
            i++;
        }

        if(e.innerHTML===""){
            e.innerHTML=turn;
            e.classList.add('notpointer');
        }

        if((myElmnt[1].innerHTML===turn)&&(myElmnt[2].innerHTML===turn)&&(myElmnt[3].innerHTML===turn)){
            telwinBackground(1,2,3);
            amaliya();
        }else if((myElmnt[4].innerHTML===turn)&&(myElmnt[5].innerHTML===turn)&&(myElmnt[6].innerHTML===turn)){
            telwinBackground(4,5,6);
            amaliya();
        }else if((myElmnt[7].innerHTML===turn)&&(myElmnt[8].innerHTML===turn)&&(myElmnt[9].innerHTML===turn)){
            telwinBackground(7,8,9);
            amaliya();
        }else if((myElmnt[1].innerHTML===turn)&&(myElmnt[5].innerHTML===turn)&&(myElmnt[9].innerHTML===turn)){
            telwinBackground(1,5,9);
            amaliya();
        }else if((myElmnt[3].innerHTML===turn)&&(myElmnt[5].innerHTML===turn)&&(myElmnt[7].innerHTML===turn)){
            telwinBackground(3,5,7);
            amaliya();
        }else if((myElmnt[1].innerHTML===turn)&&(myElmnt[4].innerHTML===turn)&&(myElmnt[7].innerHTML===turn)){
            telwinBackground(1,4,7);
            amaliya();
        }else if((myElmnt[2].innerHTML===turn)&&(myElmnt[5].innerHTML===turn)&&(myElmnt[8].innerHTML===turn)){
            telwinBackground(2,5,8);
            amaliya();
        }else if((myElmnt[3].innerHTML===turn)&&(myElmnt[6].innerHTML===turn)&&(myElmnt[9].innerHTML===turn)){
            telwinBackground(3,6,9);
            amaliya();
        }

    }
})

function telwinBackground(num1,num2,num3){
    myElmnt[num1].style.cssText="background-color: black;";
    myElmnt[num2].style.cssText="background-color: black;";
    myElmnt[num3].style.cssText="background-color: black;";
}

function amaliya(){
    document.querySelector('.game .title').innerHTML=`${turn.toLocaleUpperCase()} Winner `;  
    setInterval(()=>{
        document.querySelector('.game .title').innerHTML+='.';
    },1000);
    setTimeout(() => { 
        location.reload();
    }, 4000);
    for (let i = 0; i < document.querySelectorAll('.square').length; i++) {
        document.querySelectorAll('.square')[i].classList.add('notpointer');
    }
}
