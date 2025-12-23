import express, { Request, Response } from 'express';
import cors from 'cors'
import morgan from 'morgan';
import createRoutes from './routes/index';
import errorHandler from './middleware/error-handler';

const app = express();

app
    .disable("x-powered-by")
    .use(cors())
    .use(morgan("dev"))
    .use(express.json())
    .use(express.urlencoded({ extended: true }));


app.get('/health', (req: Request, res: Response) => {
    res.json({ status: 200, message: 'success.' })
})

createRoutes(app);

app.use(errorHandler)

export default app;