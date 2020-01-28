var obj = {};

var myStr = 'aabbbacccccbbb';

for(let i=0; i<myStr.length; i++){
    
    if(obj[myStr.charAt(i)]=== undefined){
         obj[myStr.charAt(i)] = 1;
    }else{
         obj[myStr.charAt(i)] = obj[myStr.charAt(i)]+1;
    }

}
console.log(obj);