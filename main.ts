import inquirer from "inquirer";

(async () => {

    const userdata = await inquirer.prompt(
        {
            name:"username",
            type:"input",
            message:"Enter your Name"
        }
    )

    console.log(`Hello ${userdata.username}! Let start the Game`);
    

    const question1 = await inquirer.prompt({
     
            name:"htmldefination",
            type:"input",
            message:"Html is a ------- language"
            
      
        
})

const correctanswer = "markup"



    if (question1.htmldefination === correctanswer) {
       console.log("pass");
        
    }else{
        console.log("fail");
        
    }


    
})
()