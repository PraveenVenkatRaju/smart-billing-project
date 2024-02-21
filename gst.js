function TotalTip() {
    let Cost1 = parseInt(document.getElementById("Cost1").value);
    let Cost2 = parseInt(document.getElementById("Cost2").value);
    let Quantity1 = parseInt(document.getElementById("Quantity1").value);
    let Quantity2 = parseInt(document.getElementById("Quantity2").value);
  
    let para1 = document.getElementById("para1");
    let para2= document.getElementById("para2");
    let para3 = document.getElementById("para3");
    let TotalTip = document.getElementById("TotalTip");
    let TotalGST = document.getElementById("TotalGST");
    let Total = document.getElementById("Total");
  
    let TotalCostForItem1 = Cost1 * Quantity1;
    let TotalCostForItem2 = Cost2 * Quantity2;
  
    let sum = TotalCostForItem1 + TotalCostForItem2;
     
    let TotalGST1 = sum + (sum * 18) / 100;
    let TotalBill = TotalGST1 + 100;  
  
    // para1.innerHTML = `Total cost for items: ${sum}`;
    // para2.innerHTML = `Total bill with GST: ${TotalGST1}`;
    // para3.innerHTML = `Total bill with tip: ${TotalBill}`;
  
    Total.value=sum;
    TotalGST.value=TotalGST1;
    TotalTip.value = TotalBill;
  }
  