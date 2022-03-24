function prime(num) {
  // Generate an array containing every prime number between 0 and the num specified (inclusive)
  function check(x)
  {
    for(j=2;j<x;j++)
      {
        if(x % j == 0 && x != 2 && x!=3)
          {
            return false
          }
        
      }
    return true
    
  }
    primes = []
    for(i=2;i<=num;i++)
      {
        if(num == 2)
          {
            primes.push(2)
            
          }
        
          else if(check(i))
        {
        
          primes.push(i)
          primes.push()
          
        }
        }
  
return primes
}
