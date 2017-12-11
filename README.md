## rpdebugger

Ramda + bluebird-promisell + repl

A repl that includes the following global variables for debugging in a repl:

`R`: Ramda

`P`: bluebird-promisell

`rerequire`: reload a module at certain path. Useful to change code and reload the module without losing session data.

`_store`: log the promise, extract the resolved data to `_store.data` or rejected error to `_store.error`

`_save`: save a session data into `.session.json`

`_load` : load the session data from `.session.json`

### Usage:
1. Copy the index.js file to the root path of your node project.
`cp rpdebugger/index.js ~/nodeapp/debugger.js`

2. Launch with `node`
`node debugger.js`

3. Or launch with chrome debugger
`node --inspect debugger.js`
