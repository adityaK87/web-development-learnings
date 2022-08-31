
        console.log("Hello World");
        // setTimeout <-- Allow us to run the function once after the interval of time
        // clearTimeeout <-- Allow us to run the function repeatedly after the interval of time

        function greet(name, byeText) {
            console.log('Hello Good Morning ' + name + ' ' + byeText);
        }
        //  setTimeout( greet, 5000 ,"Aadi", "Take care");
        //    Timeout=setTimeout( greet, 5000 ,"Aadi", "Take care");
        //   console.log(Timeout);
        //   clearTimeout(Timeout)

        // intervalID= setInterval( greet,1000,'aaditya', 'Good night');
        // clearInterval(intervalID)
        function displayTime(){
            time= new Date();
            console.log(time);
            document.getElementById('time').innerHTML=time;
        }

        setInterval(displayTime,10000);
  