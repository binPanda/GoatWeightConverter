window.onload=function(){

var out = document.getElementById("phrase");

var descriptions = new Array(
"Da se ubiju.",
"Da izvrše sudoku.",
"Da skoče s najviše zgrade na svetu direktno na tvrd asfalt.",
"Da se spale i izgore polako i bolno.",
"Da se leče.",
"Da se predaju u ropstvo i da malo oru njive ili nešto tako korisno.",
"Da odu u Afriku i žive s oogabooga crnjama i životinjama jer im je tamo mesto.",
"Da se obese jednostavno.",
"Da se obuku jer niko ne želi da ih gleda.",
"Da posete Crnu Reku.",
"Da prestanu biti kurve.",
"Da se lepo zatvore u jedan kavez i jedu pomije jer su životinje.",
"Da se uklone sa lica zemlje.",
"Da se bace u neku provaliju šta ja znam samo da ih ne gledam više.",
"Da se lansiraju u svemir i besciljno plutaju dok se ne uguše ili upadnu u neko sunce.",
"Da preispitaju svoje životne odluke i prestanu biti odvratne.",
"Da shvate da su kurve i okrenu se normalnom, produktivnom životu.",
"Da doniraju telo u neku mesaru pošto svakako prodaju svoje meso pa ono bolje da se od toga bar uradi neki paprikaš.",
"Da se okupe na jedno ostrvo sve i onda zovemo Kim Jong Una i kažemo da je tu tajna američka vojna baza i on isproba novu raketu tamo i svi problemi u svetu bi nestali.",
"Da ćute jer bukvalno nema poente da kurva govori bilo šta.",
"Da skuvaju ručak jednom i vide da nije teško biti žena.",
"Da istetoviraju KURVAĆETINA na čelo da svi vide da su stvarno kurvaćetine pa da pijana masa zna koga da šutira ujutru u 3 posle žestokog alkoholisanja.",
"Da se registruju u nacionalnu bazu kurvi tako da se uvek zna kome ne treba ukazati nikakvu pomoć.",
"Da budu kurve negde drugde, a ne ovde.",
"Da zaobilaze nas normalne ljude u širokom luku.",
"Da se zaposle, i ne, kurvanje nije pravi posao.",
"Da odu u Saudijsku Arabiju jer ta gospoda znaju šta se radi s njima.",
"Da crknu."
);

var randomNumber = (Math.floor(Math.random()*descriptions.length));



out.innerHTML = descriptions[randomNumber];

}
