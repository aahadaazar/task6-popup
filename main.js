var string=["Hello Aahad","This is sample", "This is sample toast","I am getting random", "This is task 6", "Javascript is getting difficult", "But it's exciting"];

var flex=document.getElementById('flex');

function onc(){

    var ran=Math.random()*6;
    ran=Math.round(ran);

    var bg=["#f55050","#7373f8","#6cfa6c"];
    var rancolor=Math.random()*2;
    rancolor=Math.round(rancolor);

    var color=["white","blue","green"];


    var iDiv = document.createElement('div');
    iDiv.id = 'block';
    iDiv.className = 'block';
    flex.appendChild(iDiv);
    var text=document.createTextNode(string[ran]);
    iDiv.appendChild(text);
    iDiv.style.backgroundColor=bg[rancolor];
    iDiv.style.color=color[rancolor];
    
    setTimeout(function(){
        iDiv.style.opacity=0;
    },3000);
    
    setTimeout(function(){
        iDiv.remove()
    },3800);
}


    

