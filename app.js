const readline = require("readline");
const url = require('node:url');
const request = require("./src/request");



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const App = () => {
  rl.question("Введите URL: ", (string) => {
    
    const parsedUrl = url.parse(string);
    const start = new Date();

    request({parsedUrl,callback:()=>{
      const end = new Date();
      const time = end - start;
      console.table([
        ['Execution time:',  `${time} ms`],
        ['Execution time:', `${time/1000} s`]
      ]);

      rl.question("Продолжить? (y/n) ", (string) => {
        if(string==="y") App();
        else {
          rl.close();
          process.exit(0);
        }
      })
      
    }})

    
  });
}

App()