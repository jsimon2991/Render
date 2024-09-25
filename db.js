const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  proces.env.DATABASE NAME, // Database name
  proces.env.DATABASE USERNAME, // User
  proces.env.DATABASE PASSWORD, // Password
  {
    host: proces.env.DATABASE HOST, // Host
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
