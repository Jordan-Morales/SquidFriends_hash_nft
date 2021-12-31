const basePath = process.cwd();
var fs = require('fs');
let adjustedIndex;
let success_array = [];

let primaryData = fs.readFileSync(`${basePath}/utils/NFTport/ChainMinted.json`)
var primaryMetaData = JSON.parse(primaryData);

var fail_array = [];


for (let index = 0; index < 2883; index++) {

    let current_line = primaryMetaData.successful_mints[index].Token_ID;
    success_array.push(current_line);

}

 function prletMissingElements(arr, N){
        // Initialize diff
        let diff = arr[0] - 0;
        for(let i = 0; i < N; i++)
        {
            // Check if diff and arr[i]-i
            // both are equal or not
            if (arr[i] - i != diff)
            {
                // Loop for consecutive
                // missing elements
                while (diff < arr[i] - i)
                {
                    fail_array.push(i + diff);
                    diff++;
                }
            }
        }
    }

     let N = success_array.length;
     // Function call
     prletMissingElements(success_array, N);
    console.log(fail_array.length);
     console.dir(fail_array, {'maxArrayLength': null});