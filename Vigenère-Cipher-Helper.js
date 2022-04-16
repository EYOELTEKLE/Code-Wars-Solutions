function VigenèreCipher(key, abc) {
  this.encode = function (str) {
    //...
   let ans = [];
   let keycounter = 0;
    let indx = 0;
    let mod = abc.length;
    for (let i = 0; i < str.length; i++)
      {
        if (str[i] == '')
        {
          keycounter++;
          continue;
        }
        if (key[keycounter] == undefined)
          {
            keycounter = 0;
          }
        if(abc.includes(str[i]) == false)
          {
            ans.push(str[i]);
            keycounter++;
          }
        else{
        indx = (abc.indexOf(str[i]) + abc.indexOf(key[keycounter])) % mod;
        ans.push(abc[indx]);
        keycounter++;
          }
        }
    return ans.join('');
  };
  this.decode = function (str) {
    //...
     let ans = [];
   let keycounter = 0;
    let indx = 0;
    let check = 0;
    let mod = abc.length;
    for (let i = 0; i < str.length; i++)
      {
        if (str[i] == '')
        {
          keycounter++;
          continue;
        }
        if (key[keycounter] == undefined)
          {
            keycounter = 0;
          }
        if(abc.includes(str[i]) == false)
          {
            ans.push(str[i]);
            keycounter++;
          }
        else
        {
          check = (abc.indexOf(str[i]) - abc.indexOf(key[keycounter]));
         if (check >= 0) {
        indx = (abc.indexOf(str[i]) - abc.indexOf(key[keycounter])) % mod;
        ans.push(abc[indx]);
        keycounter++;}
         else
         {
           indx = (abc.indexOf(str[i]) - abc.indexOf(key[keycounter])) + mod;
            ans.push(abc[indx]);
            keycounter++;
         }
        }
        }
    return ans.join('');
  };
}
