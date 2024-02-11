
// const fs = require('fs');
// const path = require('path'); // Import the path module

//     function readData(filename) {
//     const filePath = path.resolve(__dirname, filename)
//     let mockSites = [];

//     try {
//         const data = fs.readFileSync(filePath);
//         mockSites = JSON.parse(data);
//     } catch (err) {
//         console.error('Error reading mock data file:', err);
//     }

//     return mockSites;
// }

//     function updateJSONFile(filename, data) {
//     const filePath = path.resolve(__dirname, filename);
//     const stringifiedData = JSON.stringify(data, null, 2);

//     // Check if the file exists before attempting to update it
//     if (!fs.existsSync(filePath)) {
//         console.error('File does not exist:', filePath);
//         return;
//     }

//     try {
//         fs.writeFileSync(filePath, stringifiedData);
//         console.log('File updated successfully:', filePath);
//     } catch (err) {
//         console.error('Error writing to mock data file:', err);
//     }
// }

// module.exports = { readData, updateJSONFile };