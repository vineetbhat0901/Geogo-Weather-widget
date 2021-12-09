$(document).ready(function() {
    $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=4fdf70c0fcd26fa95ac300bde440c714"
          }).done(function(data) {
              console.log(data)
              $(".lname").html(data.sys.country)
              $(".ltemp").html(data.main.temp_min)
              $(".ltempmax").html(data.main.temp_max)
              $(".lfeels").html(data.weather[0].description)
          });

          $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&units=metric&appid=4fdf70c0fcd26fa95ac300bde440c714"
          }).done(function(adata) {
              console.log(adata)
              $(".aname").html(adata.sys.country)
              $(".atemp").html(adata.main.temp_min)
              $(".atempmax").html(adata.main.temp_max)
              $(".afeels").html(adata.weather[0].description)
          });

          $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=Budapest&units=metric&appid=4fdf70c0fcd26fa95ac300bde440c714"
          }).done(function(bdata) {
              console.log(bdata)
              $(".bname").html(bdata.sys.country)
              $(".btemp").html(bdata.main.temp_min)
              $(".btempmax").html(bdata.main.temp_max)
              $(".bfeels").html(bdata.weather[0].description)
          });

          $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=4fdf70c0fcd26fa95ac300bde440c714"
          }).done(function(pdata) {
              console.log(pdata)
              $(".pname").html(pdata.sys.country)
              $(".ptemp").html(pdata.main.temp_min)
              $(".ptempmax").html(pdata.main.temp_max)
              $(".pfeels").html(pdata.weather[0].description)
          });

          $("#but").click(function(){
            var pl=document.getElementById("wcity").value;
            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?q="+pl+"&units=metric&appid=3df3887e7524c268471ce586570047e2"
              }).done(function(sdata) {
                  console.log(sdata)
                  $(".scity").html(sdata.name)
                  $(".setemp").html(sdata.main.temp)
                  $(".sfeels").html(sdata.weather[0].description)
              });
              
            
            });
          
         
    })