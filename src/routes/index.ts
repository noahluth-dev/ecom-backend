import { Express } from "express";
import { createUserRoutes } from "./user";

export default function createRoutes(app: Express) {
    createUserRoutes(app);
}