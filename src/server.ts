import app from './app';
import repository from './data/repository';

const port = process.env.PORT || 8000;
app.listen(port, async () => {
    try {
        await repository.sequelizeClient.authenticate();
        console.log("Successfully connected to the database");
    } catch (error) {
        console.log("Failed to connect to the database");
        console.log(error);
    }
    console.log(`app listening on port ${port}.`);
});