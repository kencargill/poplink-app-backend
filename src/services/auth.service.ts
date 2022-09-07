import { User } from '../types/user.types';

async function login(uid: string) {}

async function signup(data: Partial<User>) {}

export const authService = {
  login,
  signup,
};
