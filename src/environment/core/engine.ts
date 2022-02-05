import { getEnvironmentNotFoundErrorMessage } from 'src/utils/messages'

/**
 * Define current running environment mode.
 */
export const NODE_ENV = process.env.NODE_ENV
if (!NODE_ENV) {
  throw new Error(getEnvironmentNotFoundErrorMessage('NODE_ENV'))
}

/**
 * Define the runtime port number for http server.
 */
export const APP_RUNTIME_PORT = process.env.APP_RUNTIME_PORT
if (!APP_RUNTIME_PORT) {
  throw new Error(getEnvironmentNotFoundErrorMessage('APP_RUNTIME_PORT'))
}
