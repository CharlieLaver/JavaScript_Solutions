function solution(str){
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("")
  return joinArray;
}

//reverse a string