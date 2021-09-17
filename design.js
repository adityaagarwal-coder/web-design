const fs=require("fs");
let text=fs.readFileSync("read.txt","utf-8");
console.log(text);
text=text.replace("lorem","aditya");
console.log("Your file is");
console.log(text);
console.log("Creating a new file...");
if(fs.writeFileSync("p.html",text));
console.log("New file created");