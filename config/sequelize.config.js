const AzureServer = {
  host: "patientlist.postgres.database.azure.com", //"localhost",
  dialect: "postgres",
  database: "patientlist",
  username: "postgres",
  password: "amaso123.", //"75824",
  port: "5432",
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false, // This line will fix new error
    },
  },
};

const sequelizeServer = new Sequelize(AzureServer);

module.exports = {
  sequelizeServer,
};
