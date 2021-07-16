let joursSemaine = ["jourImaginaire", "lundi", "mardi", "mercredi", "juedi", "vendredi", "samedi", "dimanche"];
let im;

joursSemaine.shift();
console.log(joursSemaine);
im = joursSemaine.indexOf('juedi');
joursSemaine[im] = "jeudi";
console.log(joursSemaine);