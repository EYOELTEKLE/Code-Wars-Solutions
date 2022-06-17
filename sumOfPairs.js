function sumPairs(ints, s) {
	  
	 let ans = [];
	  let obj = 
		      {
			              
			            }
	  obj[ints[0]] = ints[0];
	  for (let i = 1; i < ints.length; i++)
		  {
			       let temp = s - ints[i];
			      if (temp in obj)
				      {
					            ans.push(obj[temp], ints[i]);
					            break;
					          }
			      obj[ints[i]] = ints[i];
			    }
	  return ans.length == 0 ? undefined : ans
}
