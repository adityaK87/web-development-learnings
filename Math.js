
        //PRINTING THE MATH OBJECT
        let m = Math;
        console.log(m);

        //PRINTING THE CONSTANT FROM MATH OBJECT    
        console.log('The value of Math.E is', Math.E);
        console.log('The value of Math.PI is', Math.PI);
        console.log('The value of Math.SQRT1_2 is', Math.SQRT1_2);
        console.log('The value of Math.SQRT2 is', Math.SQRT2);
        console.log('The value of Math.LN10 is', Math.LN10);

        // E: 2.718281828459045
        // LN2: 0.6931471805599453
        // LN10: 2.302585092994046
        // LOG2E: 1.4426950408889634
        // LOG10E: 0.4342944819032518
        // PI: 3.141592653589793
        // SQRT1_2: 0.7071067811865476
        // SQRT2: 1.4142135623730951

        //PRINTING THE FUNCTION FROM MATH OBJECT    
        let a = 34.342
        let b = 84.342
        console.log('The value of a and b is', a, b);
        console.log('The value of round(a) and round(b) is', Math.round(a), Math.round(b));

        console.log("3 raised to the power 2 is" ,Math.pow(3,2));
        console.log("2 raised to the power 12 is" ,Math.pow(2,12));
        console.log("1 raised to the power 2 is" ,Math.pow(1,2));
        
        console.log(" Square root of 64 is " ,Math.sqrt(64));
        console.log(" Square root of 81 is " ,Math.sqrt(81));
        console.log(" Square root of 50 is " ,Math.sqrt(50));

        //ceil and floor
        console.log(" Ceil of 5.9 is " ,Math.ceil(5.9));
        console.log(" floor of 5.3 is " ,Math.floor(5.9));

        // Abs function
        console.log("absolute value of 5.88 is ", Math.abs(5.88));
        console.log("absolute value of -5.88 is ", Math.abs(-5.88));
        
        // trignometric function <-- values are in radian
        console.log(" the value of  sin(PI) is ", Math.sin(Math.PI/2));
        
        // min and max function
        console.log(" Minimum value of 4,5,6 is ", Math.min(4,5,6));
        console.log(" Maximum value of 4,5,6 is ", Math.max(4,5,6));

        // generating a random number
        let r=Math.random();

        //Random number b/w a1 and b1 (a1, b1)= a+ (b1-a1)*Math.random()
        let a1=1;
        let b1=100;
        let r1_100=  a + (b1-a1)*Math.random();
        console.log("The random number is " ,r);
        console.log("The random number is " ,r1_100);
        
  