import BaseRepository from "./BaseRepository";
import { AddUserRepository } from "./AddUserRepository";

const CombinedRepository = AddUserRepository(BaseRepository);
const repository = new CombinedRepository();
export default repository;