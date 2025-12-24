import BaseRepository from "./BaseRepository";
import { AddUserRepository } from "./AddUserRepository";
import { AddPostRepository } from "./PostRepository";

const CombinedRepository = AddPostRepository(AddUserRepository(BaseRepository));
const repository = new CombinedRepository();
export default repository;