import Post from "../models/Post";
import User from "../models/User";
import BaseRepository, { Constructor } from "./BaseRepository";

export function AddPostRepository<TBase extends Constructor<BaseRepository>>(Base: TBase) {
    return class extends Base {
        getPosts() {
            return Post.findAll({
                limit: this.defaultLimit,
                include:{
                    model:User,
                    attributes:['id','name']
                }
            })
        }

        getPost(id: number) {
            return Post.findByPk(id);
        }

        createUserPost(user: User, postAttributes: {
            title: string,
            body: string
        }) {
            return user.$create("post", postAttributes)
        }

        async getUserPost(user: User) {
            return user.$get("posts", {
                limit: this.defaultLimit
            })

        }


    }
}