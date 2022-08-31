

        console.log("This is Date and Time tutorial");
        let now= new Date();
        console.log(now);

        let dt= new Date(0);
        console.log(dt);
        
        // let newDate= new Date("2003-09-07");
        // console.log(newDate);
        
        // let newDate= new Date(year,month,date, hours ,minutes,second,millisecond);
        let newDate= new Date(2019,03,09,12,25,12, 123);
        // let newDate= new Date();
        console.log(newDate);

        let yr=newDate.getFullYear();
        console.log('The year is ',yr);

        let date=newDate.getDate();
        console.log('The date is ',date);

        let month=newDate.getMonth();
        console.log('The month is ',month);


        let hours=newDate.getHours();
        console.log('The hours is ',hours);


        newDate.setDate(05)
        console.log(newDate)

