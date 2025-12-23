import express, { Request, Response } from 'express';
import cors from 'cors'
import morgan from 'morgan';

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

export default app;