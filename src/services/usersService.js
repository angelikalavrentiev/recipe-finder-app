const fs = require('node:fs');
const path = require('node:path');

class UsersService {
    constructor() {
        this.filePath = path.join(__dirname, '../data/users.json');
        this.users = this.loadUsers();

        //sauvegarde automatique
        this.emitter.on('bookCreated', () => this.saveBooks());
        this.emitter.on('bookDeleted', () => this.saveBooks());
        this.emitter.on('bookUpdated', () => this.saveBooks());
    }

    // charge les users
loadUsers() {
    try {
        if (fs.existsSync(this.filePath)) {
            const data = fs.readFileSync(this.filePath, 'utf8').trim();

            if (!data) {
                console.warn('users.json est vide. Utilisation des valeurs par défaut.');
                return;
            }

            return JSON.parse(data);
        }
    } catch (err) {
        console.error('Erreur de lecture ou de parsing du fichier users.json', err);
    }

    return;
}

// sauvegarde la liste des users
saveUsers() {
    fs.writeFileSync(this.filePath, JSON.stringify(this.users, null, 2));
    console.log('Sauvegarde effectuée dans users.json');
}


getAllUsers() {
    return this.users;
}

getUserById(id) {
    return this.users.find(user => user.id === id);
}
}