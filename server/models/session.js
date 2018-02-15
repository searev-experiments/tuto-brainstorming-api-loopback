'use strict';

module.exports = function(Session) {
  Session.disableRemoteMethodByName('createChangeStream');
  Session.disableRemoteMethodByName('count');
  Session.disableRemoteMethodByName('findOne');
  Session.disableRemoteMethodByName('find');
  Session.disableRemoteMethodByName('exists');
  Session.disableRemoteMethodByName('replaceById');
  Session.disableRemoteMethodByName('replaceOrCreate');
  Session.disableRemoteMethodByName('updateAll');
  Session.disableRemoteMethodByName('upsert');
  Session.disableRemoteMethodByName('upsertWithWhere');

  // Hiding methods for the Has Many relation.
  Session.disableRemoteMethodByName('prototype.__count__ideas');
  Session.disableRemoteMethodByName('prototype.__unlink__ideas');
};
