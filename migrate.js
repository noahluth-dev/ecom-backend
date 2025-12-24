require("dotenv/config");
require("ts-node/register");
require("./src/umzug").migrator.runAsCLI();

