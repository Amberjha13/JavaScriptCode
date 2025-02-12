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

console.log(findNonReapting('aaabcdefghjikklm'))
