import app from './app';
import repository from './data/repository';

const port = process.env.PORT || 8000;
app.listen(port, async () => {
    try {
        await repository.sequelizeClient.sync();
        console.log("Successfully migrated tables");
    } catch (error) {
        console.log("Failed to migrate tables");
        console.log(error);
    }
    console.log(`app listening on port ${port}.`);
});