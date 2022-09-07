import { User } from '../types/user.types';

async function getUsers() {}

async function getUser(id: string) {}

async function addUser(data: Partial<User>) {}

async function updateUser(id: string, data: Partial<User>) {}

async function deleteUser(id: string) {}

export const usersService = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
