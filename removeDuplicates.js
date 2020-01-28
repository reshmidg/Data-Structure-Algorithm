var removeDuplicates = function(nums) {
    let i=1, j=0;
    if(nums.length<=0){
        return 0;
    }
    while(i<nums.length){
        if(nums[j] === nums[i]){
            nums.splice(i,1);
        }else{
            i++;
            j++;
        }
    }
    return nums.length;
};