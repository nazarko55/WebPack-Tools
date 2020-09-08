import fetchUser from './profile/gateway.js';
import { printProfile } from './profile/index.js';

fetchUser('github')
  .then(({ location, name }) => printProfile({
    name,
    location,
  }));