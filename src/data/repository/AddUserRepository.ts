import User from '../models/User';
import BaseRepository, { Constructor } from './BaseRepository';

export function AddUserRepository<TBase extends Constructor<BaseRepository>>(Base: TBase) {
    return class extends Base {
        getUsers() {
            return User.findAll({ limit: this.defaultLimit })
        }

        getUser(id: number) {
            return User.findByPk(id)
        }

        createUser(userAttributes: { name: string, email: string }) {
            return User.create(userAttributes);
        }

        async updateUser(id: number, userAttributes: { name?: string, email?: string }) {
            const userToUpdate = await this.getUser(id);
            if (!userToUpdate) {
                throw new Error('No user found.')
            }

            const definedUserAttributes = Object.fromEntries(Object.entries(userAttributes).filter(([_, v]) => v !== undefined))

            userToUpdate.set(definedUserAttributes)
            return await userToUpdate.save();
        }

        deleteUser(id: number) {
            return User.destroy({
                where: {
                    id
                }
            })
        }
    }
}