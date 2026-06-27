class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // using if i =0 , j = i+1
        // loop through nums 
        // nums[i] === nums[i+1] -> return true 
        // nums[i] !== nums[i+1] -> return false 

        // for(let i =0; i<nums.length; i++){
        //     for(let j = i+1; j<nums.length; j++){
        //         if(nums[i] === nums[j]) return true;
        //     }
        // }

        const elementOccurance = new Map<number, number>();

        for(let i = 0; i<nums.length; i++){
            if(!elementOccurance.has(nums[i])){
                elementOccurance.set(nums[i], 1);
            } else if(elementOccurance.has(nums[i])){
                elementOccurance.set(nums[i], elementOccurance.get(nums[i])+1)
            }
        }
        for(const [k, v] of elementOccurance){
            if(v >=2){
                return true;
            }
        }
        return false;
    }
}
