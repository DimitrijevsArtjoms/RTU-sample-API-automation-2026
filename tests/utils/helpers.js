import { config } from "../../config.js";

export async function generateTestData() {
  const envFromVariable = process.env.TEST_ENV;
  const envFromNpm = process.env.npm_config_env;
  const envFromArgs = process.argv.find((arg) =>
    Object.prototype.hasOwnProperty.call(config, arg)
  );

  setEnvironment(envFromVariable || envFromNpm || envFromArgs || "STG");
}

function setEnvironment(env) {
  global.env = env;
}

export async function generateRandomEmail() {
  return `${Math.random().toString(36).substring(2, 11)}@domain.com`;
}
