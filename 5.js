function findHighestProfit(array){
	
    var min= array[0];
    var max= -1;
    var profit= 0;
    
    for(var idx in array){
        
        if(array[idx]<min){
            min= array[idx];
            max= -1;
        }

        if(array[idx]>max){
            max= array[idx];
            if(max-min>profit){
                profit= max-min;
            }
        }
  
    }
    if(!profit) {
        profit = 'Tidak bisa mendapatkan profit pada hari-hari ini';
    }
    return profit;
  }
  
  console.log(findHighestProfit([10, 2, 11, 20, 3, 5]));
  console.log(findHighestProfit([33, 29, 11, 3]));