
/**
 * Module dependencies.
 */

import { Enum } from 'enumify';
import { concat } from 'lodash';
import ChatActionTypes from 'src/client/action-types/chat-action-types';
import MessageActionTypes from 'src/client/action-types/message-action-types';
import UserActionTypes from 'src/client/action-types/user-action-types';

/**
 * Create `ActionTypes` enum.
 */

class ActionTypes extends Enum {}

ActionTypes.initEnum(concat(
  ChatActionTypes,
  MessageActionTypes,
  UserActionTypes
));

/**
 * Export `ActionTypes`.
 */

export default ActionTypes;
