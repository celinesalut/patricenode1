// let http = require("http");

// let serveur = http.createServer((req, res) => {
//   console.log(req);
//   if (req.url === "/") {
//     res.end("bienvenue sur notre site ! ");
//   } else if (req.url === "/contact") {
//     res.end("contactez nous à l'adresse");
//   } else {
//     res.end("la page n'existe pas");
//   }
// });

// serveur.listen(3000);
// console.log("serveur démarré - écoute sur port 3000...");


let express= require('express');// creer le serveur
let serveur = express();

serveur.use(express.urlencoded({extented:false})); // acces au dom

serveur.get('/', (req, res)=>{
    console.log(`requete sur '/'`);
    res.send(`
    <form action ="/reponse" method="POST">
    <p>combien font 2+2 </p>
    <input name="reponseDonnee" autocomplete="off"/>
    <button>envoyer</button>
    </form>
    `);
});

serveur.post ('/reponse',function (req, res){
    //res.send('bien recu');
    //recuperer la valeur du formulaire
    //console.log(req.body.reponseDonnee);
    if(req.body.reponseDonnee === '4'){
    res.send (`bravo! <br/>
    <a href='/'> retour à l'accueil </a>`)
     } else{ 
    res.send(`perdu! <br/>
    <a href='/> retour à l'accueil </a>`)}
})

serveur.get ('/reponse',(req,res) => {
    res.send('etes vous perdu?');
})

serveur.listen(3000);
console.log("ecoute sur le port 3000");