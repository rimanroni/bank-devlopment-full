 
//  log in area here 
 const first = document.getElementById('login');
 first.addEventListener('click', function(){
    const firstInput = document.getElementById('oneInput').value ;
    const secondInput = document.getElementById('twoInput').value;

    if(firstInput.length > 10 && secondInput.length > 7){
        document.getElementById('firstpart').style.display = 'none';
        document.getElementById('second').style.display = 'block';
        document.getElementById('oneInput').value = "";
        document.getElementById('twoInput').value = "";
    }else{
       alert('Invalid Gmail and Password')
    }
  });


//   Deposite are here 
 const Dbtn = document.getElementById('dbtn');
Dbtn.addEventListener('click', function(){
   const input = Number(document.getElementById('dinput').value);
   const dBlance = Number(document.getElementById('dblance').innerText);
   const mainBlance = Number(document.getElementById('mblance').innerText);

   if(input>0){
        const result = input + dBlance;
        document.getElementById('dblance').innerText = result;
        
        const nowTotal = input + mainBlance;
        document.getElementById('mblance').innerText = nowTotal;
        document.getElementById('dinput').value = ""
    }else{
      alert("Invalid Amount")
      document.getElementById('dinput').value = ""
   }
 })

// widhrow btn area here 
const  btnwidhro = document.getElementById('wbtn');
btnwidhro.addEventListener('click', function(){
     const input = Number(document.getElementById('winput').value);
     const wBlance = Number(document.getElementById('wblance').innerText);
     const mainBlance = Number(document.getElementById('mblance').innerText);

     if(input > 0){
         const result = input + wBlance;
         document.getElementById('wblance').innerText = result;

         const nowTotal =  mainBlance - input;
         document.getElementById('mblance').innerText = nowTotal;
         document.getElementById('winput').value = ""

         if(nowTotal<input){
             alert('Invalid Amount')
             document.getElementById('mblance').innerText = 1200;
             document.getElementById('wblance').innerText = 00;
             document.getElementById('dblance').innerText = 00;

             document.getElementById('second').style.display = 'none';
             document.getElementById('firstpart').style.display = 'block'
         }else{}


     }else{
        alert('Invalid Amount ')
        document.getElementById('winput').value = ""
     }



})


 