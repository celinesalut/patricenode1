let http = require("http");

let serveur = http.createServer((req, res) => {
  console.log(req);
  if (req.url === "/") {
    res.end("bienvenue sur notre site ! ");
  } else if (req.url === "/contact") {
    res.end("contactez nous à l'adresse");
  } else {
    res.end("la page n'existe pas");
  }
});

serveur.listen(3000);
console.log("serveur démarré - écoute sur port 3000...");
