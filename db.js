const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  proces.env.DATABASE_NAME, // Database name
  proces.env.DATABASE_USERNAME, // User
  proces.env.DATABASE_PASSWORD, // Password
  {
    host: proces.env.DATABASE_HOST, // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
