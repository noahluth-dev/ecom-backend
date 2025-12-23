import { Express, Request, Response } from "express";
import repository from "../data/repository";

export const createUserRoutes = (app: Express) => {
    app.get('/users', async (req: Request, res: Response) => {
        const users = await repository.getUsers();
        res.json({ status: 200, users })
    })

    app.get('/users/:id', async (req: Request, res: Response) => {
        const id = Number(req.params.id);
        const user = await repository.getUser(id);
        res.json({ status: 200, user })
    })

    app.post('/users', async (req: Request, res: Response) => {
        const body = {
            name: req.body.name,
            email: req.body.email
        }

        const user = await repository.createUser(body);
        res.json({ status: 201, user })
    })

    app.put('/users/:id', async (req: Request, res: Response) => {
        const body = {
            name: req.body.name,
            email: req.body.email
        }

        const user = await repository.updateUser(Number(req.params.id), body);
        res.json({ status: 201, user })

    })

    app.delete('/users/:id', async (req: Request, res: Response) => {

        const result = await repository.deleteUser(Number(req.params.id));
        res.json({ status: 201, user_deleted: result })

    })
}