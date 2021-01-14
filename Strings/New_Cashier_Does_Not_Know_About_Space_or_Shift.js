function CountMenuItems(menuitem, input)
{
  let start = 0;
  let n = 0;
  let count = 0;
  
  while (n >= 0)
    {
      n= input.indexOf(menuitem, start);
      
      if(n >= 0)
        {
          count++;
        }
      
      start = n + 1;
    }
  
  console.log(count);
  return count;
  
}

function AddMenuItems(menu, menuitem, count)
{
   
  
  for(let i = 0; i < count; i++)
    {
      menu = menu + " " + menuitem;
    }
 
  return menu;
}


function getOrder(input) {
   console.log(input);
  let menu = "";
  let count  = CountMenuItems('burger', input);
  menu = AddMenuItems(menu, 'Burger', count);
  
  count = CountMenuItems('fries', input);
  menu = AddMenuItems(menu, 'Fries', count);
  
  count = CountMenuItems('chicken', input);
  menu = AddMenuItems(menu, 'Chicken', count);
  
  count = CountMenuItems('pizza', input);
  menu = AddMenuItems(menu, 'Pizza', count);
  
  count = CountMenuItems('sandwich', input);
  menu = AddMenuItems(menu, 'Sandwich', count);
  
  count = CountMenuItems('onionrings', input);
  menu = AddMenuItems(menu, 'Onionrings', count);
  
  count = CountMenuItems('milkshake', input);
  menu = AddMenuItems(menu, 'Milkshake', count);
  
  count = CountMenuItems('coke', input);
  menu = AddMenuItems(menu, 'Coke', count);
  
  let resultMenu = menu.substring(1);
  console.log(resultMenu);
  return resultMenu;
  
}