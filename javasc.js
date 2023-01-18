function func(e) {

  let xname = document.getElementById("name").value;
  xname=xname.trim();
  let xtel = document.getElementById("tel").value;
    xtel=xtel.trim();
  let xemail = document.getElementById("email").value;
    xemail=xemail.trim();

  let ch1 = document.getElementById("ch1").checked;
  let ch2 = document.getElementById("ch2").checked;
  let ch3 = document.getElementById("ch3").checked;
  let ch4 = document.getElementById("ch4").checked;

  let xtime = document.getElementById("time").value;
  let xdate = document.getElementById("date").value;


let isemailok=false;
let isphoneok = false;
let istimeok=false;
let dateok=false;


if ((xname.length!=0) && (ch1 || ch2 || ch3 || ch4) && (isemailok) && (isphoneok) && (istimeok) && (dateok)){
  alert("Paldies! Mēs ar Jums drīz sazināsimies, lai saņemtu apstiprinājumu!");
  return true;
}
else{


if (xname.length==0){
  alert("Ievadiet Jūsu vārdu!");e.preventDefault();
}

if (!ch1 && !ch2 && !ch3 && !ch4){
  alert("izvēleties vismaz 1 pakalpojumu!");e.preventDefault();
}

if (xdate.length==0){
  alert("izvēleties datumu!");e.preventDefault();
}
else{
  dateok=true;
}

if (xtime.match(/^[1][0-6]:[0-5][0-9]$/)){
  istimeok=true;
}
else{
  alert("Meistari strāda no 10.00 līdz 17.30. Izvēlieties korektāku laiku.");e.preventDefault();
}
//xtel.length==8 || xtel.length==12
//          /^[+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{8}$/
if (xtel.match(/^(\d{8})$/) || xtel.match(/^[+](\d{11})$/)){
  isphoneok=true;
}
else{
  alert("Ievadiet korektu telefona numuru!");e.preventDefault();
}


if (xemail.match(/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm)){
  isemailok=true;
}
else{
  alert("Ievadiet korektu e-mail!");e.preventDefault();
}
}


}



window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementsByTagName("form")[0].addEventListener("submit", func);
});
/*
function dosub(event){
  let xname = document.getElementById("name").value;
  xname=xname.trim();
  let xtel = document.getElementById("tel").value;
    xtel=xtel.trim();
  let xemail = document.getElementById("email").value;
    xemail=xemail.trim();

  let ch1 = document.getElementById("ch1").checked;
  let ch2 = document.getElementById("ch2").checked;
  let ch3 = document.getElementById("ch3").checked;
  let ch4 = document.getElementById("ch4").checked;

  let xtime = document.getElementById("time").value;
  let xdate = document.getElementById("date").value;


let isemailok=false;
let isphoneok = false;
let istimeok=false;
let dateok=false;

if ((xname.length!=0) && (ch1 || ch2 || ch3 || ch4) && (isemailok) && (isphoneok) && (istimeok) && (dateok)){
  return true;
}
else{
  return false;
}

}
*/
