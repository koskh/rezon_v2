const Default = {
    serverApi: 'http://http://localhost:3001',
    // localStorageTokenKey: 'some.token',
    tokenLifetimeSeconds: 600
};

//eslint-disable-next-line
const modifier = require(`./${PROJECT_ENV}.json`);

export default {...Default, ...modifier};
