function validatePIN (pin) 
{
  if(pinValidation(pin))
    {
      return true;
    }
  
  return false;
  
}

function pinValidation(pin) 
{
  return (/^(\d{4}|\d{6})$/).test(pin);
}