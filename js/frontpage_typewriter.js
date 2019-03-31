var i = 0;
var id = 0;
var reverse = false;
var prefix = "I can make "
var txt = ['games', 'websites', 'databases', 'models', 'stuff', 'more stuff', 'schools', 'buildings', 'features'];
var tmp;

window.onload = this.typeWriter();

function typeWriter() {
    if(!tmp){
        tmp = Array.apply(null, {length: txt.length}).map(Number.call, Number);
        getNewID();
    }

    document.getElementById("subtext").innerHTML = prefix + "<b>" + txt[id].substring(0, i) + "</b>";
    i += reverse ? -1 : 1;

    if(i > txt[id].length){
        reverse = true;
        setTimeout(typeWriter, 1500);
    }
    else if(i < 0){
        reverse = false;

        var newID = tmp[Math.floor(Math.random() * Math.floor(tmp.length))];
        
        while(newID == id)
            newID = tmp[Math.floor(Math.random() * Math.floor(tmp.length))];

        id = newID;

        getNewID();

        setTimeout(typeWriter, 200);
    }
    else
        setTimeout(typeWriter, reverse ? 100 : 200);
}

function getNewID() {
    if(tmp.length <= 1)
        tmp = Array.apply(null, {length: txt.length}).map(Number.call, Number);
    else
        for( var k = 0; k < tmp.length; k++)
            if ( tmp[k] === id) 
                tmp.splice(k, 1); 
}
    