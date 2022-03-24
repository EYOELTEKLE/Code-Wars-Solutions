function findOutlier(integers){
  //your code here
  let odd = [];
  let even = []
  for(let i = 0;i<integers.length;i++)
    {
      if(integers[i]%2 == 0)
      {
         even.push(integers[i]);   
      }
      else 
        {
          odd.push(integers[i]);
        }
    }
  if(even.length == 1)
  {
    return even[0];
  }
  else 
  {
    return odd[0];
  }
  
}
