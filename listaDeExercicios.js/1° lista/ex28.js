let pares = 0
let nums = [1,2,3,4,5,6,7,8,9,10]

for(let i in nums){
    if(nums[i] % 2 == 0){
        pares++
    }
}

console.log(`no vetor ${nums} existe ${pares} números pares`);