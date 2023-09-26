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
            element = response[i].flag;
            console.log(element);
            count++;
        }
        console.log(count);
    }
}
xhr.send()
