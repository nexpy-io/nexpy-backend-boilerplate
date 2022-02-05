import { getEnvironmentNotFoundErrorMessage } from 'src/utils/messages'

/**
 * Define the password for database connection.
 */
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD
if (!POSTGRES_PASSWORD) {
  throw new Error(getEnvironmentNotFoundErrorMessage('POSTGRES_PASSWORD'))
}

/**
 * Define the username for database connection.
 */
export const POSTGRES_USER = process.env.POSTGRES_USER
if (!POSTGRES_USER) {
  throw new Error(getEnvironmentNotFoundErrorMessage('POSTGRES_USER'))
}

/**
 * Define the database name.
 */
export const POSTGRES_DB = process.env.POSTGRES_DB
if (!POSTGRES_DB) {
  throw new Error(getEnvironmentNotFoundErrorMessage('POSTGRES_DB'))
}

/**
 * Define the database host for connection.
 */
export const POSTGRES_HOST = process.env.POSTGRES_HOST
if (!POSTGRES_HOST) {
  throw new Error(getEnvironmentNotFoundErrorMessage('POSTGRES_HOST'))
}

/**
 * Define the database port number for connection.
 */
const _POSTGRES_PORT_TO_CAST = process.env.POSTGRES_PORT
if (!_POSTGRES_PORT_TO_CAST) {
  throw new Error(getEnvironmentNotFoundErrorMessage('POSTGRES_PORT'))
}
export const POSTGRES_PORT = Number(_POSTGRES_PORT_TO_CAST)
