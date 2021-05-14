const db = require('../util/database');

module.exports = class Security {        

    constructor(_id,name, transaction) {
        this._id = _id;
        this.name = name;
        this.transaction = transaction;   
    }  
    save() {       
            return db.execute('INSERT INTO Securities(_id,name,history_details) VALUES(?,?,?)', [
                this._id, this.name, this.transaction])  
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