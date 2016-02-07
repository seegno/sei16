
/**
 * Module dependencies.
 */

import { Enum } from 'enumify';
import { concat } from 'lodash';
import ChatActionTypes from 'src/client/action-types/chat-action-types';

/**
 * Create `ActionTypes` enum.
 */

class ActionTypes extends Enum {}

ActionTypes.initEnum(concat(
  ChatActionTypes
));

/**
 * Export `ActionTypes`.
 */

export default ActionTypes;
