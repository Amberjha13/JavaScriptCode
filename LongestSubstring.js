
function findNonReapting(str){
    
    let end = 0;
    let start = 0;
    let longest = '';
    let charMap = new Map();
    
    while(end<str.length){
        let current = str[end];
        if(charMap.has(current)&& charMap.get(current)>= start){
            start = charMap.get(current)+1
        }
        charMap.set(current, end);
        if(end-start+1>longest.length){
            longest = str.substring(start, end+1)
        }
        end++;
    }
    return longest;
}
function maxChar(str) {
 let charMap = {};
 let maxChar = ''
 let maxNum = 0;
  for(char of str){
      if(char!=' '){
      charMap[char] = (charMap[char]||0)+1;
      if(charMap[char]>maxNum){
          maxNum = charMap[char]
          maxChar = char 
      }
          
      }
  }
   let {y, ...newCharMap} = charMap
  return newCharMap;
}
console.log(maxChar('my name is amber'))

console.log(findNonReapting('aaabcdefghjikklm'))
