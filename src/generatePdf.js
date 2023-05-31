const puppeteer = require('puppeteer');
const fs = require('fs');

//Declare URL to download
const website_url = 'https://github.com/Cataniou';

//Declare directoy to download
let dir = '.\\';

//Define date variables
let nameMonth = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
let date = new Date();
let year = date.getFullYear();
let minutes = date.getMinutes().toString().length === 1 ? '0' + date.getMinutes() : date.getMinutes();
let hours = date.getHours().toString().length === 1 ? '0' + date.getHours() : date.getHours();
let day = date.getDate().toString().length === 1 ? '0' + date.getDate() : date.getDate();
let month = (date.getMonth() + 1).toString().length === 1 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
if (month === 13)
{
  month = '01';
}

// Define and Create directory: Origin Directory + Actual Year
dir = dir + year + '\\';
fs.mkdir(dir, (err) => {
  if (err) {
      return console.error(err);
  }
  console.log('Directory created successfully!');
});

// Create directory: Directory + Actual Month
dir = dir + nameMonth[month - 1] + '\\';
fs.mkdir(dir, (err) => {
  if (err) {
      return console.error(err);
  }
  console.log('Directory created successfully!');
});

// Create directory: Directory + Actual Day
dir = dir + day + '\\';
fs.mkdir(dir, (err) => {
  if (err) {
      return console.error(err);
  }
  console.log('Directory created successfully!');
});

// Define file name and full directory
let fileName = year + '-' + month + '-' + day + ' ' + hours + 'h' + minutes + '.pdf'; 
let fullDir = dir + fileName;

// Print directory to download
console.log(fullDir);

// Generate PDF
(async () => {

  // Create a browser instance
  const browser = await puppeteer.launch();

  // Create a new page
  const page = await browser.newPage();

  //Get HTML content from HTML file
  await page.goto(website_url, { waitUntil: 'networkidle0' }); 

  // To reflect CSS used for screens instead of print
  await page.emulateMediaType('screen');

  // Downlaod the PDF
  const pdf = await page.pdf({
    path: fullDir,
    margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
    printBackground: true,
    format: 'A4',
  });

  // Close the browser instance
  await browser.close();
})();
