var config = {
  development: {
    server: {
      port: 8081,
    },
    database: {
      url: 'mongodb://localhost/nodetest_dev'
    }
  },
  testing: {
    server: {
      port: 8081
    },
    database: {
      url: 'mongodb://localhost/nodetest_test'
    }
  },
  production: {
    server: {
      port: 8081
    },
    database: {
      url: 'mongodb://localhost/nodetest'
    }
  }
};

module.exports = config[process.env.NODE_ENV] || config.development;
