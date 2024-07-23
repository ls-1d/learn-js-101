import fs from 'fs';
class Journal {
    constructor() {
        this.entries = {};
    }
    addEntry(text) {
        let c = ++Journal.count;
        let entry = `${c}: ${text}`;
        this.entries[c] = entry;
        return c;
    }
    removeEntry(index) {
        delete this.entries[index];
    }
    toString() {
        return Object.values(this.entries).join('\n');
    }
    save(filename) {
        fs.writeFileSync(filename, this.toString());
    }
    load(filename) {
        //
    }
    loadFromUrl(url) {
        //
    }
}

class PersistenceManager {
    preprocess(j) {
        //
    }
    saveToFile(journal, filename) {
        fs.writeFileSync(filename, journal.toString());
    }
}

Journal.count = 0;

let j = new Journal();
j.addEntry('I cried today');
j.addEntry('I ate a bug');
j.addEntry('I eat a tree');

console.log(j.entries);
console.log(j.toString());

// j.removeEntry(3);
console.log(j.entries);

let p = new PersistenceManager();
let filename = 'journal.txt';
p.saveToFile(j, filename);
