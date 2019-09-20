export default {
    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA
    },
    auth: {
        secret: process.env.SECRET
    },
    keys: {
        apikey: process.env.APIKEY,
        domain: process.env.DOMAIN
    }
}