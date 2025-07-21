// Doesn't work:
//import fs from 'fs';
// Or for specific methods:
// import { readFile, writeFile } from 'fs/promises';

// CommonJS (Default in Node.js)
// const fs = require('fs');
// Alternatively, using promises (Node.js 10.0.0+)
const fs = require('fs').promises;
// Or with destructuring
//const { readFile, writeFile } = require('fs').promises;

async function writeFileExample() {
  try {
    // Write text to a file
    await fs.writeFile('myOutfile.txt', 'Hello, World, again!', 'utf8');

    // Write JSON data
    const data = { name: 'John', age: 30, city: 'New York' };
    await fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8');

    console.log('Files created successfully');
  } catch (err) {
    console.error('Error writing files:', err);
  }
}

writeFileExample();

