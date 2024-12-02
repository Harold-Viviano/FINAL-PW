import Sequelize from 'sequelize';

const hostname = 'finalprograweb.postgres.database.azure.com';
const username = 'postgres';
const password = 'Adminitrador!';
const database = 'programacionweb';
const port = 5432;
const dialect = 'postgres';

const sequelize = new Sequelize (database, username,password, {
    host : hostname,
    port : port,
    dialect : dialect,
    operatorAliases : false

})

export default sequelize;