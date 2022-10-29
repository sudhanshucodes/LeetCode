/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let p1 =0; 
    let p2 =p1;
    while(p1<s.length && p2<t.length){
        let char = s[p1];
        if(t[p2]===char){
           p1++;
        }
        p2++;
    }
    return p1===s.length?true:false;
};
