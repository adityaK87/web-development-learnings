
        let jsonObj = {
            name: "Aditya",
            channel: 'codeWithAadi',
            friend: 'Nikita',
            food: 'Aaloo paratha'
        }
        console.log(jsonObj);


        let JsonStr = JSON.stringify(jsonObj)
        console.log(JsonStr);

        JsonStr = JsonStr.replace('Nikita','Anjali')
        console.log(JsonStr); 

        let myJsonObj=JSON.parse(JsonStr);
        console.log(myJsonObj);
