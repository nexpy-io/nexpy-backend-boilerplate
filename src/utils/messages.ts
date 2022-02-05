export const getEnvironmentNotFoundErrorMessage = (envName: string) =>
  `Missing ${envName} environment variable in this running engine or .env file. Please check the engine settings or the .env.example file.`
