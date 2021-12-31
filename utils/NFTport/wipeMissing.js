const basePath = process.cwd();
var fs = require('fs');

let primaryData = fs.readFileSync(`${basePath}/utils/NFTport/missing.json`)
var primaryMetaData = JSON.parse(primaryData);
let missing_array = primaryMetaData.missing_array;

for (let index = 0; index < missing_array.length; index++) {
    let element = missing_array[index];

    let broken_mint_file = fs.readFileSync(`${basePath}/build/minted/${element}.json`);
    var parsedBrokenJson = JSON.parse(broken_mint_file);

    parsedBrokenJson.mintData.response = "NOK"

    fs.writeFileSync(
        `${basePath}/build/minted/${element}.json`,
        JSON.stringify(parsedBrokenJson, null, 2))
        console.log(`${element}.json updated!`);

}



