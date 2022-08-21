class RefundModel {
    constructor(client){
        this.client = client;
    }

    initDatabase(){
        var pool  = this.client.mysql.createPool({
            connectionLimit : 10,
            host            : this.client.config.database.host,
            user            : this.client.config.database.username,
            password        : this.client.config.database.password,
            database        : this.client.config.database.database
          });

        console.log(pool)

        this.pool = pool;
    }
}

module.exports = RefundModel;


