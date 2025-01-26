const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database('./tasks.db')

db.serialize(() => {
    db.run(`CREATE CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        task TEXT NOT NULL,
        completed BOOLEAN DEFAULT 0
    `);
});

module.exports = db;