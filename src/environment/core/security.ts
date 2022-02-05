import { getEnvironmentNotFoundErrorMessage } from 'src/utils/messages'

/**
 * Define the auth sign secret key.
 */
export const APP_AUTH_SIGN_SECRET_KEY = process.env.APP_AUTH_SIGN_SECRET_KEY
if (!APP_AUTH_SIGN_SECRET_KEY) {
  throw new Error(getEnvironmentNotFoundErrorMessage('APP_AUTH_SIGN_SECRET_KEY'))
}

/**
 * Define the auth sign expiration time. Don't forget
 * the time unit at the end of the string as 's'.
 */
export const APP_AUTH_SIGN_TOKEN_EXPIRATION_TIME =
  process.env.APP_AUTH_SIGN_TOKEN_EXPIRATION_TIME
if (!APP_AUTH_SIGN_TOKEN_EXPIRATION_TIME) {
  throw new Error(
    getEnvironmentNotFoundErrorMessage('APP_AUTH_SIGN_TOKEN_EXPIRATION_TIME')
  )
}
