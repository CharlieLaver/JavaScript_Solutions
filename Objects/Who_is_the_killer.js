let nameArr;

function filterperson(person) {
 if(nameArr.includes(person)) {
   return false;
 }
  return true;
}



function killer(suspectInfo, dead) {
  
  for(let i = 0; i < Object.keys(suspectInfo).length; i++) {
   let keyname = Object.keys(suspectInfo)[i];
    nameArr = suspectInfo[keyname];
    
    let resArr = dead.filter(filterperson);
    
    if(resArr.length == 0) {
      return keyname;
    }
    
  }

}