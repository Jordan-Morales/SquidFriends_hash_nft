const basePath = process.cwd();
var fs = require('fs');
let adjustedIndex;
let failed_array = [];

for (let index = 0; index < 2883; index++) {
    let primaryData = fs.readFileSync(`${basePath}/utils/NFTport/ChainMinted.json`)

     if (index === 0) {
         adjustedIndex = 1;
         console.log(adjustedIndex);
     }

    var primaryMetaData = JSON.parse(primaryData);

    console.log("This is the current array location: " + index);
    let current_line = primaryMetaData.successful_mints[index].Token_ID;
     console.log("This is the Token ID: " + current_line);

    if (adjustedIndex !== current_line) {
        console.log("Failed Token ID: " + adjustedIndex);
        failed_array.push(adjustedIndex);
        adjustedIndex = current_line;
        adjustedIndex = adjustedIndex + 1;
        //console.log(primaryMetaData.successful_mints[index].Txhash + "This item failed.")
    } else { 
        adjustedIndex = adjustedIndex + 1;
        console.log("Success Token ID: " + current_line)
};

    // var metaData = JSON.parse(rawdata);

    // //primaryMetaData[index].image = metaData.file_url;
    // primaryMetaData[index].file_url = metaData.file_url;

    // fs.writeFileSync(
    //     `${basePath}/build/json/_metadata.json`,
    //     JSON.stringify(primaryMetaData, null, 2))
    //     console.log(`_metadata.json updated! File: ${adjustedIndex}`);
}

console.log(failed_array);

console.log(failed_array.length);
