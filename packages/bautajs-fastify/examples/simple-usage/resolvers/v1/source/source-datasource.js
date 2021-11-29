const { restProvider } = require('@axa/bautajs-datasource-rest');
const { getRequest } = require('../../../../../dist/index');

module.exports.provider1 = restProvider((client, _, ctx, bautajs) => {
  const req = getRequest(ctx);

  return client.get(`https://jsonplaceholder.typicode.com/posts?limit=${req.query.limit}`, {
    cache: new Map(),
    reqId: req.query.a,
    method: 'GET',
    headers: {
      'custom-header': bautajs.staticConfig.someVar
    }
  });
});
