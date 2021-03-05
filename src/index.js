module.exports = function check(str, bracketsConfig) {
   if(str.length%2!==0){
      return false;
   }
   let bracketsConfigNew = [];
   for(let i = 0; i<bracketsConfig.length; i++){
    bracketsConfigNew[i] = bracketsConfig[i].join('');
   }
   let strLength = str.length;
   for(let n = 0; n < strLength/2; n++){
      for(let i = 0; i < bracketsConfigNew.length; i++){
         str = str.split(bracketsConfigNew[i]).join('');
      }
   }
   
   return (str==='');
 }


