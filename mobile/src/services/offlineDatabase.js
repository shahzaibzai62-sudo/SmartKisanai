// Important: First you will need to install expo-sqlite 
// Command: npx expo install expo-sqlite

import * as SQLite from 'expo-sqlite';

// Open or create the database
const db = SQLite.openDatabase('smartkisan.db');

export const initDatabase = () => {
  db.transaction(tx => {
    // Create Expenses Table
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS expenses (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        title TEXT, 
        amount REAL, 
        date TEXT,
        synced INTEGER DEFAULT 0
      );`
    );
  });
};

export const addExpenseRecord = (title, amount, date) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO expenses (title, amount, date) VALUES (?, ?, ?);`,
        [title, amount, date],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export const getExpenses = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM expenses ORDER BY id DESC;`,
        [],
        (_, { rows: { _array } }) => resolve(_array),
        (_, error) => reject(error)
      );
    });
  });
};
