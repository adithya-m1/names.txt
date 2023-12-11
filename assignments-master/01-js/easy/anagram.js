/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1=="" && str2==""){
    return true;
  }
  if(str1.length==str2.length){
    for(let i=0;i<str1.length;i++){
       if(str2.toLowerCase().includes(str1[i].toLowerCase())){
           return true;
        }
       else{
          return false;
      }
  }
}
else{
  return false;
}
}

module.exports = isAnagram;
