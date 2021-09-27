document.body.style.cssText='background-color:#23404B; color:white;';
// var br=document.createElement("br");

// function to createElement
function create_card(ele){
    var card = document.createElement(ele);
    card.setAttribute("class","card");
    card.style.cssText='text-align:center;color:white;background-image: linear-gradient(to right, #DBC9A2 , #3F5251);';
    return card; 
}

function create_card_head(ele){
    var card_head=document.createElement(ele);
    card_head.setAttribute("class","card-header");
    card_head.style.cssText='background-color:black;';
    return card_head;
}

function create_card_body(ele){
    var card_body=document.createElement(ele);
    card_body.setAttribute("class","card-body");
    card_body.style.cssText='padding:10px;';
    return card_body;
}

function create_image(ele){
    var image=document.createElement(ele);
    image.style.cssText='width:80%;height:180px;margin-bottom:8px;margin-top:15px;';
    return image;
}

function create_button(ele){
    var button=document.createElement(ele);
    button.setAttribute("class","btn btn-primary");
    button.style.cssText='background-color:transparent;border-color: white;margin-top:12px;margin-bottom:20px;';
    return button;
}

function create_h4(ele){
    var h4=document.createElement(ele);
    return h4;
}

function create_p1(ele){
    var p=document.createElement(ele);
    p.style.cssText='margin-top:5px; margin-bottom:0px;';
    return p;
}

function create_p2(ele){
    var p=document.createElement(ele);
    p.style.cssText='margin-top:5px; margin-bottom:0px;';
    return p;
}

function create_p3(ele){
    var p=document.createElement(ele);
    p.style.cssText='margin-top:5px; margin-bottom:0px;';
    return p;
}

function create_card_div(ele){
    var card_div=document.createElement(ele);
    card_div.setAttribute("class","col-sm-12");
    return card_div;
}

function create_col_div(ele){
    var col_div=document.createElement(ele);
    col_div.setAttribute("class","col-lg-4");
    col_div.style.cssText='margin-bottom:20px;'
    return col_div;
}

function weather(id){
    var name = document.getElementById("h4_"+id).innerText;
    var cap = document.getElementById("cap_"+id).innerText.substr(10);
    document.getElementById("title").innerText=name;
    var url=`https://api.openweathermap.org/data/2.5/weather?q=${cap},${id}&APPID=d7603b75db0fbdb7e9a6cb99813ed5ca`;
    fetch(url)
    .then(function(data){
        return data.json();
    })
    .then(function(json_data){
        document.getElementById("temp").innerText=`Temperature : ${json_data.main.temp}`;
        document.getElementById("pres").innerText=`Pressure : ${json_data.main.pressure}`;
        document.getElementById("humi").innerText=`Humidity : ${json_data.main.humidity}`;
    })
    .catch(function(error){
        console.log(error);
    });
}


// function to append
function append(parent,child){
    return parent.appendChild(child);
}

// fetching 
fetch("https://restcountries.com/v3/all")
.then(function(jsondata){
    return jsondata.json()
})
.then(function(data){
    //console.log(data);
    return data.map(function(country,index){
        //console.log(country);
        console.log(index);
        var h4=create_h4('h4');
        h4.innerHTML=country.name.common;
        h4.setAttribute("id","h4_"+country.cca2);
        var image=create_image('img');
        image.src=country.flags[1];
        var p1=create_p1('p');
        p1.innerHTML=`Capital : ${country.capital}`;
        p1.setAttribute("id","cap_"+country.cca2);
        var p2=create_p2('p');
        p2.innerHTML=`Region : ${country.region}`;
        var p3=create_p3('p');
        p3.innerHTML=`Country Code : ${country.cca3}`;
        var button=create_button('button');
        button.setAttribute("data-toggle","modal");
        button.setAttribute("data-target","#myModal");
        button.setAttribute("id",country.cca2);
        button.setAttribute("onclick","weather(this.id)");
        button.innerHTML="Click for Weather";
        var card_head=create_card_head('div');
        var card_body=create_card_body('div');
        var card=create_card('div');
        var card_div=create_card_div('div');
        card_div.setAttribute("id",country.cca3);
        var col_div=create_col_div('div');
        append(card_head,h4);
        append(card_body,image);
        append(card_body,p1);
        append(card_body,p2);
        append(card_body,p3);
        append(card_body,button);
        append(card,card_head);
        append(card,card_body);
        append(card_div,card);
        append(col_div,card_div);
        var row1=document.getElementById('rw').append(col_div);
        //document.body.appendChild(col_div);
    })
})
.catch(function(error){
    console.log(error);
});

var ele = document.querySelectorAll('.col-lg-4');
console.log(ele);

var elements = document.getElementsByClassName("col-lg-4");
console.log(elements);

console.log(typeof elements);

for (var i = 0; i < elements.length; i++) {
    console.log(elements[i].className); 
}

//var row1=document.getElementById('rw').append(elements);


