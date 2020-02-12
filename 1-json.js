const fileSystem=require('fs');

var book={
    title:'My strory',
    author:'Prince'
}

const myBook=JSON.stringify(book,null," ");

// console.log(myBook);


fileSystem.writeFileSync('1-json.json',myBook);

var myData=fileSystem.readFileSync('1-json.json','utf-8');

const myJson=JSON.parse(myData);
console.log(myJson.author);