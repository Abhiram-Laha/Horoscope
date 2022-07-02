var res//=document.getElementById("pass").value

function getSelectValue()
{
   var selectedValue = document.getElementById("list").value;
    console.log(selectedValue);

    document.getElementById("givesignvalue").innerHTML = "Yours Todays Fortune";

    if(selectedValue=="none"){
        alert("First Select Your Sign!!");
    }  
    else{
    const base="https://aztro.sameerkumar.website/?sign=";
    const url=base+selectedValue+"&day=today";
    fetch(url, {
        method: 'POST'
    })
    .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        res=JSON.stringify(myJson);
        showinfo(res);
    }); 
}
}
function showinfo(take)
{   document.getElementById("passage").style.display="block";
    const show=JSON.parse(take);
    console.log(show);
    document.getElementById("givedes").innerHTML = show.description;
    document.getElementById("givecolor").innerHTML ="Lucky Color : "+show.color;
    document.getElementById("giveno").innerHTML = "Lucky no. : "+show.lucky_number;
    document.getElementById("givetime").innerHTML = "Lucky time : "+show.lucky_time;
    document.getElementById("givemood").innerHTML = "Mood : "+show.mood;
}