// =======================================
// Puerto
// =======================================
process.env.PORT = process.env.PORT || 3000;


//user: strider
//pass: MGca1Gc9cVy3bJyg

//mongodb ://strider:MGca1Gc9cVy3bJyg@cafe-ctyoi.mongodb.net/cafe
// =======================================
// Entorno
// =======================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
console.log(process.env.NODE_ENV);
// =======================================
// Base de Datos
// =======================================
let urlDB;

if (!process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;