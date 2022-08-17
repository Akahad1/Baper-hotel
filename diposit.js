document.getElementById('btn-deposit').addEventListener('click',function(){  
    const depositField = document.getElementById('deposit-filed')
    
    const NewdepositAmountString =depositField.value
    const NewdepositAmount = parseFloat(NewdepositAmountString)

    const Totaldepositor = document.getElementById('diposit-total');
    const PreviousTotaldepositorIdex =Totaldepositor.innerText
    const TotaldepositorIdex =parseFloat(PreviousTotaldepositorIdex)
    // set number add the deposit
    const TotaldepositorIn = NewdepositAmount + TotaldepositorIdex
    Totaldepositor.innerText =TotaldepositorIn
    

    depositField.value='';
    // set the add balanes
     
    const balanesTotalElement = document.getElementById('balance-total')
    const balanesTotalString =balanesTotalElement.innerText
    const balanesTotal = parseFloat(balanesTotalString)

    const currentBalanceTotal = balanesTotal +NewdepositAmount

    balanesTotalElement.innerText =currentBalanceTotal
    


    
})









// // console.log(depositAmount)
// const depositTotalElement = document.getElementById('diposit-total')
// const depositTotalstring =depositTotalElement.innerText;
// const PeviousdepositTotalstring = parseFloat (PeviousdepositTotalstring)
// //    depositTotalElement.innerText = NewdepositAmount
   
//  const currentTotal = NewdepositAmount+ PeviousdepositTotalstring
//  depositTotalElement.innerText =currentTotal