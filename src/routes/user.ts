import { Express, Request, Response } from "express";
import repository from "../data/repository";
import { error } from "node:console";

export const createUserRoutes = (app: Express) => {
    app.get('/users', async (req: Request, res: Response) => {
        const users = await repository.getUsers();
        res.json({ status: 200, users })
    })

    app.get('/users/:id', async (req: Request, res: Response) => {
        const id = Number(req.params.id);
        const user = await repository.getUser(id);
    })

    app.get('/users/:id/posts', async (req: Request, res: Response) => {
        const user_id = parseInt(req.params.id);
        const user = await repository.getUser(user_id);
        if (!user) {
            return res.status(400).json({
                error: {
                    message: 'User not found'
                }
            })
        }

        const userPosts = await repository.getUserPost(user)
        return res.status(200).json(userPosts)
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