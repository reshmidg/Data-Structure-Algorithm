var strStr = function(haystack, needle) {
    if(needle === '')
    return 0;

    var len = needle.length;

    for(let i=0; i<haystack.length; i++){
        if(haystack.charAt(i) === needle.charAt(0)){
            if(haystack.substr(i,len) === needle){
                return i;
            }
        }
    }
    return -1;
};