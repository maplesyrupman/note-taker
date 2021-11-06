const fs = require('fs');

function updateNotes(notes) {
    return fs.writeFile('./db/db.json', JSON.stringify(notes, null, 2), (err) => {
        if (err) {
            return err;
        } 
    })
}

module.exports = updateNotes