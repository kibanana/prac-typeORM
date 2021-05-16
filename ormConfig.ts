import { ConnectionOptions } from 'typeorm';
import Account from './entity/Account';
import AlternativePayment from './entity/AlternativePayment';
import Group from './entity/Group';

const connectionOptions: ConnectionOptions = {
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "yewon",
  "database": "housework_contract",
  "synchronize": true,
  "logging": true,
  "entities": [
    Account,
    AlternativePayment,
    Group,
    "src/entity/*.ts"
  ],
  "subscribers": [
    "src/subscriber/*.ts"
  ],
  "migrations": [
    "src/migration/*.ts"
  ],
  "cli": {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  }
}

export default connectionOptions;