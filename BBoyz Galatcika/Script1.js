// Classe pour représenter une Guilde
class Guilde {
    constructor(nom) {
        this.nom = nom; // Nom de la guilde
        this.membres = []; // Liste des membres
    }

    ajouterMembre(membre) {
        if (this.membres.length < 5) {
            this.membres.push(membre);
            console.log(`${membre.nom} a rejoint la guilde ${this.nom}.`);
        } else {
            console.log(`La guilde ${this.nom} est déjà au complet.`);
        }
    }
}

// Classe pour représenter un Membre de la Guilde
class Membre {
    constructor(nom, role) {
        this.nom = nom; // Nom du membre
        this.role = role; // Rôle du membre
    }
}

// Classe pour représenter un Détenteur de Terre
class DetenteurTerre {
    constructor(nom, services) {
        this.nom = nom; // Nom du détenteur de terre
        this.services = services; // Services alloués
    }

    proposerService(service) {
        console.log(`${this.nom} propose le service: ${service}`);
    }
}

// Exemple d'utilisation
const maGuilde = new Guilde('Guilde des Explorateurs');
const membre1 = new Membre('Alice', 'Guerrier');
const membre2 = new Membre('Bob', 'Artisan');

maGuilde.ajouterMembre(membre1);
maGuilde.ajouterMembre(membre2);

const detenteur1 = new DetenteurTerre('Charlie', ['Fermes', 'Ateliers']);
detenteur1.proposerService('Fermes pour la guilde');
