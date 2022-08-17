// stap1
document.getElementById('btn-withdraw').addEventListener('click',function(){
//    strap2
const withdrawFild =document.getElementById('withdraw-field')
const withdrawFildString =withdrawFild.value
const withdrawIntiger =parseFloat(withdrawFildString)



// strap3

const withdrawTotal =document.getElementById("Withdraw-total")
const PreviousWithdrawString =withdrawTotal.innerText
const PreviousWithdrawIntger = parseFloat(PreviousWithdrawString)

//   step5
const balanesTotalElement =document.getElementById('balance-total')
const balanesTotalString = balanesTotalElement.innerText;

const peviousBlanceIntigger = parseFloat(balanesTotalString)

//   sterp7
withdrawFild.value= ''
// strep6

if( withdrawIntiger >peviousBlanceIntigger  ){
    alert('vaver bank ye eto taka nai')
    return;
  }
// strep4
  

const currentBalane = withdrawIntiger +PreviousWithdrawIntger
withdrawTotal.innerText =currentBalane

const TotalcurrentBlance = peviousBlanceIntigger - withdrawIntiger
balanesTotalElement.innerText = TotalcurrentBlance











})