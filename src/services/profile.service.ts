import { Profile } from '../types/profile.types';

async function getProfiles() {}

async function getUserProfiles(userId: string) {}

async function getProfile(id: string) {}

async function getProfileByUsername(profileUsername: string) {}

async function addProfile(data: Partial<Profile>) {}

async function updateProfile(id: string, data: Partial<Profile>) {}

async function deleteProfile(id: string) {}

export const profileService = {
  getProfiles,
  getUserProfiles,
  getProfileByUsername,
  getProfile,
  addProfile,
  updateProfile,
  deleteProfile,
};
