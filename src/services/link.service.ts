import { Link } from '../types/link.types';

async function getLinks() {}

async function getUserLinks(userId: string) {}

async function getProfileLinks(profileId: string) {}

async function getLinksByUsername(profileUsername: string) {}

async function getLink(id: string) {}

async function addLink(data: Partial<Link>) {}

async function updateLink(id: string, data: Partial<Link>) {}

async function deleteLink(id: string) {}

export const linkService = {
  getLinks,
  getUserLinks,
  getProfileLinks,
  getLinksByUsername,
  getLink,
  addLink,
  updateLink,
  deleteLink,
};
