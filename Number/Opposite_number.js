function opposite(number) 
{
 if(number > 0)
   {
      return -Math.abs(number);
   }
  
  if(number < 0)
    {
      return Math.abs(number);
    }
  
  if(number == 0)
    {
      return 0;
    }
}