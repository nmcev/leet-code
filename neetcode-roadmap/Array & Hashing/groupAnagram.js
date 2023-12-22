/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

    const map = new Map();


    for (let i = 0; i < strs.length; i++) {
        const keyWord = strs[i].split('').sort().join('');
        
        if(!map.has(keyWord)) { 
            map.set(keyWord, []);
        }
        map.get(keyWord).push(strs[i])
    }

    return Array.from(map.values());
};