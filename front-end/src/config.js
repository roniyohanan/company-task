const config = {
  backend_service: {
    hostname: 'http://localhost:4000',
    endpoints: {
      users: '/api/users',
      companies: '/api/companies',
    }
  },
};

export default config;
