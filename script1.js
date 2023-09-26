let xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all',true)
xhr.onload = function()
{
    if(xhr.status===200)
    {
        let response = JSON.parse(xhr.responseText); 
        console.log(response)
        let count = 0;
        for(i=0;i<response.length;i++)
        {
            let element  = response[i].name.common;
            let element1 = response[i].region;
            let element2 = response[i].subregion;
            let element3 = response[i].population;
            console.log("The Country Name is :",element);
            console.log("The Region Name is :",element1);
            console.log("The Sub-Region Name is :",element2);
            console.log("The Population Count is :",element3);
            console.log("---------------------------------------------");
            count++;
        }
        console.log(count);
    }
}
xhr.send()
