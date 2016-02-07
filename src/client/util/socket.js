
/**
 * Module dependencies.
 */

import { app } from 'src/client/constants/app-constants';
import io from 'socket.io-client';

/**
 * Create instance of `io` with API's url.
 */

const socket = io(app.api.baseUrl);

/**
 * Export `socket`.
 */

export default socket;
