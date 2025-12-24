import { Express, Request, Response } from "express";
import repository from "../data/repository";

export const createPostRoutes = (app: Express) => {
    app.get('/posts', async (req: Request, res: Response) => {
        const posts = await repository.getPosts();
        res.json({ status: 200, posts })
    })

    app.get('/posts/:id', async (req: Request, res: Response) => {
        const id = Number(req.params.id);
        const post = await repository.getPost(id);
        res.json({ status: 201, post })
    })

    app.post('/posts', async (req: Request, res: Response) => {
        const body = {
            title: req.body.title,
            body: req.body.body
        }
        const user_id = req.body.user_id;

        const user = await repository.getUser(user_id)
        if (!user) {
            return res.status(404).json({
                error: {
                    message: 'user not found.'
                }

            })
        }

        const post = await repository.createUserPost(user, body);
        res.json({ status: 201, post })
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