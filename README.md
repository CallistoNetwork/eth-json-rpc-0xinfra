# eth-json-rpc-0xinfra

`json-rpc-engine` middleware for 0xinfra's REST endpoints.

### usage as provider

```js
const create0xinfraProvider = require('eth-json-rpc-0xinfra/src/createProvider')
const Ethjs = require('ethjs')

const provider = create0xinfraProvider({ network: 'mainnet' })
const eth = new Ethjs(provider)
```

### usage as middleware

```js
const create0xinfraMiddleware = require('eth-json-rpc-0xinfra')
const RpcEngine = require('json-rpc-engine')

const engine = new RpcEngine()
engine.push(create0xinfraMiddleware({ network: 'ropsten' }))
```
