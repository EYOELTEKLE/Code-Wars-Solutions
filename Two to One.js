function longest(a1, a2){
    st = a1 + a2
     x = st.split("")
     Arrays = x.sort()
     NonDuplicate = []
     set = new Set(NonDuplicate)
    
    for(i =0;i<Arrays.length + 1;i++)
      {   
         if(i == 0)
           {
             
            
         
           NonDuplicate.push(Arrays[i])
         
             
           }
        else if(Arrays[i] !=  Arrays[i+1] && Arrays[0] != Arrays[i])
            
         { 
           NonDuplicate.push(Arrays[i])
         }
        else{
          continue;
        }
        
        
      }
    
    
    return NonDuplicate.join('')
  }
