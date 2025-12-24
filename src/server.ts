import app from './app';
import repository from './data/repository';

const port = process.env.PORT || 8000;
app.listen(port, async () => {
    console.log(`app listening on port ${port}.`);
});