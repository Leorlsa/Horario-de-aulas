
function modal(){
    document.getElementById("modal").style.display="none";
}
function modal2(){
    document.getElementById("modal").style.display="block";
}

function dados(){
    var nome = document.getElementById("caixadonomemodal").value;
    var turma = document.getElementById("caixadaturmamodal").value;
    var turno = document.getElementById("lista").value;

    document.getElementById("nome").innerText= "ALUNO(A): " + nome;
    document.getElementById("turma").innerText= "     / CURSO: " + turma;
    
    console.log(turno);
    if(turno === "manha"){
        document.getElementById("turnoAB").innerText= "7:30 ÁS 9:10";
        document.getElementById("turnoCD").innerText= "9:30 ÁS 11:10";
        document.getElementById("turnoEF").innerText= "11:30 ÁS 13:00";

        document.getElementById("turnoAB1").innerText= "7:30 ÁS 9:10";
        document.getElementById("turnoCD1").innerText= "9:30 ÁS 11:10";
        document.getElementById("turnoEF1").innerText= "11:30 ÁS 13:00";

        document.getElementById("turnoAB2").innerText= "7:30 ÁS 9:10";
        document.getElementById("turnoCD2").innerText= "9:30 ÁS 11:10";
        document.getElementById("turnoEF2").innerText= "11:30 ÁS 13:00";

        document.getElementById("turnoAB3").innerText= "7:30 ÁS 9:10";
        document.getElementById("turnoCD3").innerText= "9:30 ÁS 11:10";
        document.getElementById("turnoEF3").innerText= "11:30 ÁS 13:00";

        document.getElementById("turnoAB4").innerText= "7:30 ÁS 9:10";
        document.getElementById("turnoCD4").innerText= "9:30 ÁS 11:10";
        document.getElementById("turnoEF4").innerText= "11:30 ÁS 13:00";

        document.getElementById("turnoAB5").innerText= "7:30 ÁS 9:10";
        document.getElementById("turnoCD5").innerText= "9:30 ÁS 11:10";
        document.getElementById("turnoEF5").innerText= "11:30 ÁS 13:00";


    }else if(turno === "tarde"){
        document.getElementById("turnoAB").innerText= "13:30 ÁS 15:10";
        document.getElementById("turnoCD").innerText= "15:30 ÁS 17:10";
        document.getElementById("turnoEF").innerText= "17:20 ÁS 19:00";

        document.getElementById("turnoAB1").innerText= "13:30 ÁS 15:10";
        document.getElementById("turnoCD1").innerText= "15:30 ÁS 17:10";
        document.getElementById("turnoEF1").innerText= "17:20 ÁS 19:00";

        document.getElementById("turnoAB2").innerText= "13:30 ÁS 15:10";
        document.getElementById("turnoCD2").innerText= "15:30 ÁS 17:10";
        document.getElementById("turnoEF2").innerText= "17:20 ÁS 19:00";

        document.getElementById("turnoAB3").innerText= "13:30 ÁS 15:10";
        document.getElementById("turnoCD3").innerText= "15:30 ÁS 17:10";
        document.getElementById("turnoEF3").innerText= "17:20 ÁS 19:00";

        document.getElementById("turnoAB4").innerText= "13:30 ÁS 15:10";
        document.getElementById("turnoCD4").innerText= "15:30 ÁS 17:10";
        document.getElementById("turnoEF4").innerText= "17:20 ÁS 19:00";

        document.getElementById("turnoAB5").innerText= "13:30 ÁS 15:10";
        document.getElementById("turnoCD5").innerText= "15:30 ÁS 17:10";
        document.getElementById("turnoEF5").innerText= "17:20 ÁS 19:00";

        
    }else if(turno === "noite"){
        document.getElementById("turnoAB").innerText= "19:00 ÁS 20:40";
        document.getElementById("turnoCD").innerText= "21:00 ÁS 22:40";
        document.getElementById("turnoEF").innerText= "--:--  --:--";

        document.getElementById("turnoAB1").innerText= "19:00 ÁS 20:40";
        document.getElementById("turnoCD1").innerText= "21:00 ÁS 22:40";
        document.getElementById("turnoEF1").innerText= "--:--  --:--";

        document.getElementById("turnoAB2").innerText= "19:00 ÁS 20:40";
        document.getElementById("turnoCD2").innerText= "21:00 ÁS 22:40";
        document.getElementById("turnoEF2").innerText= "--:--  --:--";

        document.getElementById("turnoAB3").innerText= "19:00 ÁS 20:40";
        document.getElementById("turnoCD3").innerText= "21:00 ÁS 22:40";
        document.getElementById("turnoEF3").innerText= "--:--  --:--";

        document.getElementById("turnoAB4").innerText= "19:00 ÁS 20:40";
        document.getElementById("turnoCD4").innerText= "21:00 ÁS 22:40";
        document.getElementById("turnoEF4").innerText= "--:--  --:--";

        document.getElementById("turnoAB5").innerText= "19:00 ÁS 20:40";
        document.getElementById("turnoCD5").innerText= "21:00 ÁS 22:40";
        document.getElementById("turnoEF5").innerText= "--:--  --:--";
    }
}  

function link(x){
    var abSLink = document.getElementById(x).value;
    window.open(abSLink);
}

function naoexiste(){
    console.log("Não Existe");

    var nome =  document.getElementById("caixadonomemodal").value;
    var turma =  document.getElementById("caixadaturmamodal").value;
    var turno = document.getElementById("lista").value;

    localStorage.setItem("Nome", "ALUNO(A): " + nome);
    localStorage.setItem("Turma", "     / CURSO: " + turma);
    localStorage.setItem("Turno", turno);

    for(c=1; c<=3; c++){
        for(d=2; d<=6; d++){  
            localStorage.setItem("caixaD"+d+"H"+c, document.getElementById("caixaD"+d+"H"+c).value);
            
            document.getElementById("materiaD"+d+"H"+c).innerText=localStorage.getItem("caixaD"+d+"H"+c);

        }
    }

    localStorage.setItem("LinksegundaAB", document.getElementById("LinksegundaAB").value);
    localStorage.setItem("LinksegundaCD",  document.getElementById("LinksegundaCD").value);
    localStorage.setItem("LinksegundaEF",  document.getElementById("LinksegundaEF").value);
    localStorage.setItem("LinktercaAB",  document.getElementById("LinktercaAB").value);
    localStorage.setItem("LinktercaCD",  document.getElementById("LinktercaCD").value);
    localStorage.setItem("LinktercaEF",  document.getElementById("LinktercaEF").value);
    localStorage.setItem("LinkquartaAB",  document.getElementById("LinkquartaAB").value);
    localStorage.setItem("LinkquartaCD",  document.getElementById("LinkquartaCD").valueaD4H2L);
    localStorage.setItem("LinkquartaEF",  document.getElementById("LinkquartaEF").value);
    localStorage.setItem("LinkquintaAB",  document.getElementById("LinkquintaAB").value);
    localStorage.setItem("LinkquintaCD",  document.getElementById("LinkquintaCD").value);
    localStorage.setItem("LinkquintaEF",  document.getElementById("LinkquintaEF").valueaD5H3L);
    localStorage.setItem("LinksextaAB",  document.getElementById("LinksextaAB").value);
    localStorage.setItem("LinksextaCD",  document.getElementById("LinksextaCD").value);
    localStorage.setItem("LinksextaEF",  document.getElementById("LinksextaEF").value);
}

function existe(){
    console.log("Existe");

    document.getElementById("nome").innerText= localStorage.getItem("Nome");
    document.getElementById("turma").innerText= localStorage.getItem("Turma");

    for(c=1; c<=3; c++){
        for(d=2; d<=6; d++){  
            document.getElementById("materiaD"+d+"H"+c).innerText=localStorage.getItem("caixaD"+d+"H"+c);
            window.open(localStorage.getItem("LinksegundaAB"));
        }
    }

    if(localStorage.getItem("Turno") === "manha"){
        document.getElementById("turnoAB").innerText= "7:30 ÁS 9:10";
        document.getElementById("turnoCD").innerText= "9:30 ÁS 11:10";
        document.getElementById("turnoEF").innerText= "11:30 ÁS 13:00";

        document.getElementById("turnoAB1").innerText= "7:30 ÁS 9:10";
        document.getElementById("turnoCD1").innerText= "9:30 ÁS 11:10";
        document.getElementById("turnoEF1").innerText= "11:30 ÁS 13:00";

        document.getElementById("turnoAB2").innerText= "7:30 ÁS 9:10";
        document.getElementById("turnoCD2").innerText= "9:30 ÁS 11:10";
        document.getElementById("turnoEF2").innerText= "11:30 ÁS 13:00";

        document.getElementById("turnoAB3").innerText= "7:30 ÁS 9:10";
        document.getElementById("turnoCD3").innerText= "9:30 ÁS 11:10";
        document.getElementById("turnoEF3").innerText= "11:30 ÁS 13:00";

        document.getElementById("turnoAB4").innerText= "7:30 ÁS 9:10";
        document.getElementById("turnoCD4").innerText= "9:30 ÁS 11:10";
        document.getElementById("turnoEF4").innerText= "11:30 ÁS 13:00";

        document.getElementById("turnoAB5").innerText= "7:30 ÁS 9:10";
        document.getElementById("turnoCD5").innerText= "9:30 ÁS 11:10";
        document.getElementById("turnoEF5").innerText= "11:30 ÁS 13:00";

    }else if(localStorage.getItem("Turno") === "tarde"){
        document.getElementById("turnoAB").innerText= "13:30 ÁS 15:10";
        document.getElementById("turnoCD").innerText= "15:30 ÁS 17:10";
        document.getElementById("turnoEF").innerText= "17:20 ÁS 19:00";

        document.getElementById("turnoAB1").innerText= "13:30 ÁS 15:10";
        document.getElementById("turnoCD1").innerText= "15:30 ÁS 17:10";
        document.getElementById("turnoEF1").innerText= "17:20 ÁS 19:00";

        document.getElementById("turnoAB2").innerText= "13:30 ÁS 15:10";
        document.getElementById("turnoCD2").innerText= "15:30 ÁS 17:10";
        document.getElementById("turnoEF2").innerText= "17:20 ÁS 19:00";

        document.getElementById("turnoAB3").innerText= "13:30 ÁS 15:10";
        document.getElementById("turnoCD3").innerText= "15:30 ÁS 17:10";
        document.getElementById("turnoEF3").innerText= "17:20 ÁS 19:00";

        document.getElementById("turnoAB4").innerText= "13:30 ÁS 15:10";
        document.getElementById("turnoCD4").innerText= "15:30 ÁS 17:10";
        document.getElementById("turnoEF4").innerText= "17:20 ÁS 19:00";

        document.getElementById("turnoAB5").innerText= "13:30 ÁS 15:10";
        document.getElementById("turnoCD5").innerText= "15:30 ÁS 17:10";
        document.getElementById("turnoEF5").innerText= "17:20 ÁS 19:00";

        
    }else if(localStorage.getItem("Turno") === "noite"){
        document.getElementById("turnoAB").innerText= "19:00 ÁS 20:40";
        document.getElementById("turnoCD").innerText= "21:00 ÁS 22:40";
        document.getElementById("turnoEF").innerText= "--:----:--";

        document.getElementById("turnoAB1").innerText= "19:00 ÁS 20:40";
        document.getElementById("turnoCD1").innerText= "21:00 ÁS 22:40";
        document.getElementById("turnoEF1").innerText= "--:----:--";

        document.getElementById("turnoAB2").innerText= "19:00 ÁS 20:40";
        document.getElementById("turnoCD2").innerText= "21:00 ÁS 22:40";
        document.getElementById("turnoEF2").innerText= "--:----:--";

        document.getElementById("turnoAB3").innerText= "19:00 ÁS 20:40";
        document.getElementById("turnoCD3").innerText= "21:00 ÁS 22:40";
        document.getElementById("turnoEF3").innerText= "--:----:--";

        document.getElementById("turnoAB4").innerText= "19:00 ÁS 20:40";
        document.getElementById("turnoCD4").innerText= "21:00 ÁS 22:40";
        document.getElementById("turnoEF4").innerText= "---:------:--";

        document.getElementById("turnoAB5").innerText= "19:00 ÁS 20:40";
        document.getElementById("turnoCD5").innerText= "21:00 ÁS 22:40";
        document.getElementById("turnoEF5").innerText= "--:----:--";
    }

    window.open(localStorage.getItem("LinksegundaAB"));
    window.open(localStorage.getItem("LinksegundaCD"));
    window.open(localStorage.getItem("LinksegundaEF"));
    window.open(localStorage.getItem("LinktercaAB"));
    window.open(localStorage.getItem("LinktercaCD"));
    window.open(localStorage.getItem("LinktercaEF"));
    window.open(localStorage.getItem("LinkquartaAB"));
    window.open(localStorage.getItem("LinkquartaCD"));
    window.open(localStorage.getItem("LinkquartaEF"));
    window.open(localStorage.getItem("LinkquintaAB"));
    window.open(localStorage.getItem("LinkquintaCD"));
    window.open(localStorage.getItem("LinkquintaEF"));
    window.open(localStorage.getItem("LinksextaAB"));
    window.open(localStorage.getItem("LinksextaCD"));
    window.open(localStorage.getItem("LinksextaEF"));
}

function link(y){
    var abSLinkN = localStorage.getItem(y);
    window.open(abSLinkN);
}
window.onload = function () { 
    if (localStorage.getItem("Nome")){
        document.getElementById("modal").style.display="none";
        existe();
    }
    else{
        document.getElementById("modal").style.display="block";
        
    }
}