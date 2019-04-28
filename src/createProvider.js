const RpcEngine = require('json-rpc-engine')
const providerFromEngine = require('eth-json-rpc-middleware/providerFromEngine')
const create0xinfraMiddleware = require('./index')


module.exports = createProvider

function createProvider(opts){
  const engine = new RpcEngine()
  engine.push(create0xinfraMiddleware(opts))
  return providerFromEngine(engine)
}
