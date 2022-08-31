
        //arrow function
         let greet = () =>{
            console.log('good morning');
        }
        greet();

        // let sum=(a,b) => {
        //     return a+b;
        // };
        let sum=(a,b) => a+b;
        let half=a =>a/2;
            

        // function greet(){
        //     console.log('Good morning');
        // }
        // greet();

        setTimeout(() => {
            console.log('We are inside the setTimeout');
        }, 3000);


        let obj1={
            greetings:'Good morning',
            names:['Aditya', 'Harry','Nikita', 'Rishabh','Ketan' ],
            speak(){
                this.names.forEach((student)=>{
                    console.log(this.greetings+' kukdoo koo '+ student);
                });
            }
        }
        obj1.speak();