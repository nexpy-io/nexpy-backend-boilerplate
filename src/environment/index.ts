/**
 * define current running environment mode.
 */
const NODE_ENV = process.env.NODE_ENV || 'production'

/**
 * define the runtime port number for http server.
 */
const APP_RUNTIME_PORT = process.env.APP_RUNTIME_PORT || 80

export { NODE_ENV, APP_RUNTIME_PORT }
