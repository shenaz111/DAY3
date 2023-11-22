var Nations = new XMLHttpRequest();
Nations.open("GET","https://restcountries.com/v3.1/all");
Nations.send();
Nations.onload = function(){
    var result = JSON.parse(Nations.response)
    console.log(result)
    for (var i =0;i<result.length; i++){
        var countryName = result[i].name.common;
        var population = result[i].population;
        var region = result[i].region;
        var subregion = result[i].subregion;
        
        
        console.log("countryName:"+countryName);
       console.log("region :"+region);
       console.log("population :"+population);
       console.log("subregion:"+subregion);
       


   }
}