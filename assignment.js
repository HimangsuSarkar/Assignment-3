
//kilometer to meter convert program 
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

   //hotelCost program 
   function hotelCost(days){
    var hotelRant=0;
    if(days<=10){
        hotelRant=days*100;
    }
    else if(days<=20){
        var first_10_days=10*100;
        var dueDays=days-10;
        var second_10_days=dueDays*80;
        hotelRant=first_10_days+second_10_days;
    }
    else{
       var first_10_days=10*100;
       var second_10_days=10*80;
       var dueDays=days-20;
       var othersDays=dueDays*50;
       hotelRant=first_10_days+second_10_days+othersDays;
    }
    return hotelRant;
    }
    
   

