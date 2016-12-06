var config = {
  development: {
    server: {
      port: process.env.NODE_PORT || 80,
    },
    database: {
      url: 'mongodb://localhost/nodetest_dev'
    }
  },
  testing: {
    server: {
      port: 3000
    },
    database: {
      url: 'mongodb://localhost/nodetest_test'
    }
  },
  production: {
    server: {
      port: 3000 
    },
    database: {
      url: 'mongodb://localhost/nodetest'
    }
  }
};

module.exports = config[process.env.NODE_ENV] || config.development;
