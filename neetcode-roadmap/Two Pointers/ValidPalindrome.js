/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }

        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++; 
        right--;
    }

    return true

    function isAlphanumeric(string) {
        return (
            (string.charCodeAt(0) >= 48 && string.charCodeAt(0) <= 57) ||
            (string.charCodeAt(0) >= 65 && string.charCodeAt(0) <= 90) ||
            (string.charCodeAt(0) >= 97 && string.charCodeAt(0) <= 122)
        )
    }
};