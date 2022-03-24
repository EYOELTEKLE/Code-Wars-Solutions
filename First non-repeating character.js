function firstNonRepeatingLetter(s) {
  // Add your code here
  
  str = ''
  for(i = 0;i<s.length;i++)
    {
      var count = 0
      for (j = 0;j<s.length;j++)
        {
          if(s[i].toLowerCase() == s[j].toLowerCase())
          count++;
          
        }
      if( count == 1)
        {
          str = s[i];
          break;
        }
    }
  return(str);
}
