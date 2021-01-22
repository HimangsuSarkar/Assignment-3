

//kilometer to meter convert program 
function kilometerToMeter(kilometer){

    if(kilometer<0){
      return "Negative value not allow"; // distance can't nagetive so checking condition
    }else{
      var meter=kilometer*1000; //using formula;
      return meter;
    }
  }
  
  //budget calculator program 
  function budgetCalculator(watch,mobile,laptop){
    var watchPrice=50;
    mobilePrice=100;
    laptopPrice=500;

    if(watch<=0 || mobile<=0 || laptop<=0){
        return "you put wrong value"; // checking if user put 0 or nagative value
    }else{
       var totalBudget= (watchPrice*watch)+(mobilePrice*mobile)+(laptopPrice*laptop);
       return totalBudget;
    }
   }

//hotelCost program 
   function hotelCost(days){
    var hotelRant=0; // initializes value 0 for sum
     //condition checking 
    if(days<=10){
        hotelRant=days*100;
    }
    else if(days<=20){
        var first_10_days=10*100;
        var dueDays=days-10; //over 10days
        var second_10_days=dueDays*80;
        hotelRant=first_10_days+second_10_days; //sum equal or less 20days
    }
    else{
       var first_10_days=10*100;
       var second_10_days=10*80;
       var dueDays=days-20; //over 20days
       var othersDays=dueDays*50;
       hotelRant=first_10_days+second_10_days+othersDays; //sum over 21 days 
    }
    return hotelRant;
    }

    //megaFriend program
    function megaFriend(friendsName){
      var lengthOfElement = 0;
      var longestName;
      
      if(lengthOfElement===0){
         return "you must write array element";//checking if user put empty array
      }
      else{
        for (var i = 0; i < friendsName.length; i++) {
          if (friendsName[i].length > lengthOfElement) {
             lengthOfElement = friendsName[i].length;
            longestName= friendsName[i];
          }
        }
      }
      return longestName;
    }
    
   

