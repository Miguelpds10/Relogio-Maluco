var rep;
var mes_ext = new Array
(
"Janeiro",
"Fevereiro",
"Março",
"Abril",
"Maio",
"Junho",
"Julho",
"Agosto",
"Setembro",
"Outubro",
"Novembro",
"Dezembro"
);

var sema = new Array
(
"Domingo",
"Segunda-feira",
"Terça-feira",
"Quarta-feira",
"Quinta-feira",
"Sexta-feira",
"Sábado"
);


function Exibir(){
    rep= setInterval("Repetir()",1000);
    
}

function Repetir(){
    
    //Recebendo a hora do dia
var h = new Date();
//Recebendo o dia  do mês 
var dia = h.getDate();

if(dia <10){
    dia = "0" + dia;
}
//recebendo o mês
var mes = h.getMonth();
document.getElementById("mes").value= mes_ext[mes]

mes = mes + 1;
 if(mes <10){
    mes = "0" + mes;
}
//Recebendo o ano com 4 dígitos
var ano = h.getFullYear();

// Recebendo a hora
var hora = h.getHours();
if(hora <10){
    hora = "0" + hora;
}

//Recebendo o minuto
var minu = h.getMinutes();
if(minu <10){
    minu = "0" + minu;
}

//Recebendo os segundos
var segu = h.getSeconds();
if(segu <10){
    segu = "0" + segu;
}

// Recebendo o dia da semana
var sm = h.getDay();

//Preenchendo os campos do formulário
document.getElementById("txtdia").value=dia;
document.getElementById("txtmes").value=mes;
document.getElementById("txtano").value=ano;

document.getElementById("txthora").value=hora;
document.getElementById("txtmin").value=minu;
document.getElementById("txtseg").value=segu;

document.getElementById("txtsemana").value= sema[sm];
}

//parar o horário do relógio
function Parar(){
 clearInterval(rep);
}

//Limpar os dados do formulário
function Limpar(){
clearInterval(rep);
} 