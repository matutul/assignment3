//https://github.com/matutul/assignment3
function kilometerToMeter(kilometer){
  if(kilometer>0){
    return kilometer*1000;
  }else{
    return 0;
  }
}

function budgetCalculator(watch, mobile, laptop){
  if(watch<0){
    watch = 0;
  }
  if(mobile<0){
    mobile = 0;
  }
  if(laptop<0){
    laptop = 0;
  }
  return (watch*50)+(mobile*100)+(laptop*500);
}

function hotelCost(night){
  if(night>0){
    if(night<=10){
      return night*100;
    }
    else if(night<=20){
      return ((night-10)*80)+1000;
    }
    else{
      return ((night-20)*50)+1800;
    }
  }
  else{
    return 0;
  }
}

function megaFriend(arr){
  char_num = 0;
  index = -1;
  for(var i = 0; i<arr.length; i++){
    if(char_num<arr[i].length){
      char_num = arr[i].length;
      index = i;
    }
  }
  if(index>-1){
    return arr[index];
  }
}