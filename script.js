let mail = prompt("mail:ibrahim")
    let motpasse = prompt("motpasse:123");

    if( mail=="ibrahim" && motpasse=="123"){
            alert("bienvenu");
            document.location.href="tableaudebord.html"; 
    }else{
        alert("erreur")
        document.location.href="index.html"; 
    }  