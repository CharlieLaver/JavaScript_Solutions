 let till = [];

function tickets(peopleInLine){
 
  till = new Array();
  for(let j = 0; j < peopleInLine.length; j++)
    {
      let current = peopleInLine[j];
      till.push(current);
      console.log('till added : ' + till);
      let change = changeNeeded(current);
      console.log('changeNeeded: ' + change);
      if(change > 0)
        {
          if(giveChange(change) == false)   
         {
           return 'NO';
         }
        }
       
      
    }
  return 'YES';
}

function changeNeeded(amount)
{
  const ticketPrice = 25;
  let change = amount - ticketPrice;
  return change;
  
}

function giveChange(change)
{
  if(change == 25)
    {
      return change25();
    }
  
  if(change == 50)
    {
      return change50();
    }
  
  if(change == 75)
    {
      return change75();
    }
}

//change for 25
  function change25()
  {
    
 let changePosition = till.indexOf(25);
  console.log('changePosition='+changePosition);
  if(changePosition < 0)
    {
      return false;
    }
  else
    {
      till.splice(changePosition, 1);
       console.log('tillAfterChangeGiven: ' + till);

      return true;
    }
  }


 //change for 50 
  function change50(changeNeeded)
  {
    if(changeNeeded == 50)
      {
        let pos50 = till.indexOf(50);
        if(pos50 >= 0)
          {
            till.splice(pos50, 1);
            return true;
          }
        let pos1 = till.indexOf(25);
        if(pos1 < 0)
          {
            return false;
          }
        
        till.splice(pos1, 1);
        
        pos1 = till.indexOf(25);
        if (pos1 < 0)
          {
            return false;
          }      
        
      }
  }
    
    //change for 75
   function change75()
    {
    
      let pos50 = till.indexOf(50);
      console.log('pos50' + pos50)
      if(pos50 >= 0)
        {
        till.splice(pos50, 1);
          
      // look for 25
          let pos25 = till.indexOf(25);
          console.log('pos25' + pos25);
          if(pos25 >= 0)
            {
              till.splice(pos25, 1);
              return true;
            }
         
        }
     
      // only get here if i still need to give change 
      
      
       
        let pos1 = till.indexOf(25);
        if(pos1 < 0)
          {
            return false;
          }
        
        till.splice(pos1, 1);
        
         pos1 = till.indexOf(25);
        if (pos1 < 0)
          {
            return false;
          }   
          till.splice(pos1, 1);
         
           pos1 = till.indexOf(25);
        if (pos1 < 0)
          {
            return false;
          }      
          till.splice(pos1, 1);
       
 return true

 
}