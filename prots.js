// Merci de respecter mon travail et ne pas copier ce script.
// Script créé par Timothé Sévigny
//timsev6.github.io
//tscopy.gitub.io/tscopy.js



function tscopy() {
  var imgs = document.getElementsByTagName("img");
  for(var i=0; i<imgs.length; i++)
  imgs[i].oncontextmenu = msg;
}



function msg() {
  window.alert("Se site est proteger par tscopy.github.io\n\nLa copie d'image est interdite sur ce site.");return false;
}
