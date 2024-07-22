
import inquirer from "inquirer";
import chalk from "chalk"

console.log(`${chalk.rgb(255,193,205)("\t\t\t\t\tWelcome TO WORD COUNTER")}`);

 let condition = true 
let trimParagraph = (paragraph:string)=>{
    return (paragraph.trim()).split(" ")
}
while (condition) {
    let askParagraph = await inquirer.prompt({
        name:"userParagraph",
        type:"input",
        message:`${chalk.blue("enter a paragraph here...")}`,
        
    })
    
    let wordCounter =  trimParagraph(askParagraph.userParagraph)
    console.log(wordCounter);
    
    console.log((wordCounter.length));  
    
    let ans = await inquirer.prompt({
        name:"askMore",
        type:"list",
        message:`${chalk.blueBright("what do you want to do next?")}`,
        choices:["exit","continue"]
        })
        if(ans.askMore === "exit"){
            condition = false
        }
        else{
            condition = true
        }
}


