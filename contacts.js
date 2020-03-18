/*
Activité : gestion des contacts
*/

// TODO : complétez le programme

console.log("Bienvenue dans le gestionnaire de contacts !");
console.log("1 : Lister les contacts \n2 : Ajouter un contact \n0 : Quitter");

// Création d'un objet contact
let contact = {
  creationDuContact: function(nom, prenom){
      this.nom = nom;
      this.prenom = prenom;
  },

  descriptionDuContact: function() {
      decrire = "Nom : " + this.nom + "\n"+ "Prénom : " + this.prenom;
      decrireDom = "<p> • Nom : " + this.nom + " <br> \n• Prénom : " + this.prenom + "</p>";
      return decrire;
  }
};

// Création des 2 contacts
let caroleLevisse = Object.create(contact);
caroleLevisse.creationDuContact("Lévisse", "Carole");

let nelsonneMelodie = Object.create(contact);
nelsonneMelodie.creationDuContact("Nelsonne", "Mélodie");

// Création du tableau += les 2 contacts
let tableauContacts = [caroleLevisse, nelsonneMelodie];

// Création d'une fonction listant les contacts
    function liste() {

      tableauContacts.forEach ((contact) => {
        console.log(contact.descriptionDuContact());
        document.write(decrireDom);
      });
    }

// Création d'une fonction ajoutant un contact
    function ajout() {

        nouveauContact = Object.create(contact);
        let nom = prompt("Entrez le Nom du nouveau contact :");
        let prenom = prompt("Entrez le Prénom du nouveau contact :");
        nouveauContact.creationDuContact(nom, prenom);
        tableauContacts.push(nouveauContact);
        alert("Le contact a bien été ajouté !")
    }

// Création d'une boucle à choix multiples :
let option = Number(prompt("Choisissez une Option : \n\n1 • Lister les contacts \n2 • Ajouter un contact  \n0 • Quitter \n\n"));

    while (option !== 0){

        if (option === 1) {
            liste();
            console.log("1 : Lister les contacts \n2 : Ajouter un contact \n0 : Quitter");
            option = Number(prompt("Choisissez une Option : \n\n1 • Lister les contacts \n2 • Ajouter un contact  \n0 • Quitter \n\n"));
        }

        else if (option === 2) {
            ajout();
            console.log("Le nouveau contact : " + nouveauContact.nom + " " + nouveauContact.prenom + " a été ajouté.");
            console.log("1 : Lister les contacts \n2 : Ajouter un contact \n0 : Quitter");
            option = Number(prompt("Choisissez une Option : \n\n1 • Lister les contacts \n2 • Ajouter un contact  \n0 • Quitter \n\n"));
        }

        else if ((option < 0) || (option > 2)) {
            option = Number(prompt("Je ne connais pas cette option !\n\nChoisissez une Option : \n\n1 • Lister les contacts \n2 • Ajouter un contact  \n0 • Quitter \n\n"));
            console.log(option);
            console.log("1 : Lister les contacts \n2 : Ajouter un contact \n0 : Quitter");
        }
    }

// Message de fin du programme si option = 0 :
        if (option === 0) {
            console.log("Au revoir !")
            alert("Merci et Au revoir !")
        }