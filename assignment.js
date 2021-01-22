
//kilometer to meter convert
function kilometerToMeter(kilometer){
    if(kilometer<0){
      return "Nagative value not allow";
    }else{
      var meter=kilometer*1000;//using formula;
      return meter;
    }
  }
  
//budget calculator program
  function budgetCalculator(watch,mobile,laptop){
    var watchPrice=50;
    mobilePrice=100;
    laptopPrice=500;

    if(watch<0 || mobile<0 || laptop<0){
        return "you put wrong value";
    }else{
       var totalBudget= (watchPrice*watch)+(mobilePrice*mobile)+(laptopPrice*laptop);
       return totalBudget;
    }
    
   }
   

   