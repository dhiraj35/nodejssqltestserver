const db = require('../util/database');

module.exports = class Product {    

    constructor(title, security,transaction) {
        this.title = title;
        this.security = security;
        this.transaction = transaction;   
    }  
    save() {
            return db.execute('INSERT INTO tbl_portfolio(name,security_code,transaction) VALUES(?,?,?)', [
                this.title, this.security, this.transaction])  
    }        
    // static deleteById(id) {
    //     return db.execute('DELETE FROM products WHERE id=?', [id]);
    // }

    // static fetchAll() {
    //     return db.execute('SELECT * FROM products');
    // }
    // static findById(pid) {
    //     return db.execute('SELECT * FROM products WHERE id = ?', [pid]);
    // }

    
}