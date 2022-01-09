/**
 * Define current running environment mode.
 */
export const NODE_ENV = process.env.NODE_ENV
if (!NODE_ENV) {
  throw new Error(
    'Missing NODE_ENV environment variable in .env file. Please check the .env.example file.'
  )
}

/**
 * Define the runtime port number for http server.
 */
export const APP_RUNTIME_PORT = process.env.APP_RUNTIME_PORT
if (!APP_RUNTIME_PORT) {
  throw new Error(
    'Missing APP_RUNTIME_PORT environment variable in .env file. Please check the .env.example file.'
  )
}

/**
 * Define the password for database connection.
 */
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD
if (!POSTGRES_PASSWORD) {
  throw new Error(
    'Missing POSTGRES_PASSWORD environment variable in .env file. Please check the .env.example file.'
  )
}

/**
 * Define the username for database connection.
 */
export const POSTGRES_USER = process.env.POSTGRES_USER
if (!POSTGRES_USER) {
  throw new Error(
    'Missing POSTGRES_USER environment variable in .env file. Please check the .env.example file.'
  )
}

/**
 * Define the database name.
 */
export const POSTGRES_DB = process.env.POSTGRES_DB
if (!POSTGRES_DB) {
  throw new Error(
    'Missing POSTGRES_DB environment variable in .env file. Please check the .env.example file.'
  )
}

/**
 * Define the database host for connection.
 */
export const POSTGRES_HOST = process.env.POSTGRES_HOST
if (!POSTGRES_HOST) {
  throw new Error(
    'Missing POSTGRES_HOST environment variable in .env file. Please check the .env.example file.'
  )
}

/**
 * Define the database port number for connection.
 */
const _POSTGRES_PORT_TO_CAST = process.env.POSTGRES_PORT
if (!_POSTGRES_PORT_TO_CAST) {
  throw new Error(
    'Missing POSTGRES_PORT environment variable in .env file. Please check the .env.example file.'
  )
}
export const POSTGRES_PORT = Number(_POSTGRES_PORT_TO_CAST)
