import * as express from 'express';
import { createConnection } from 'typeorm';
import ormConfig from './ormConfig'
import route from './src/routes';

createConnection(ormConfig)
    .then(async connection => {
        const app = express();
        app.use(express.json());

        app.use('/', route);

        app.listen(3000);
        console.log("Express application is up and running on port 3000");
    })
    .catch(err => console.log(err));
