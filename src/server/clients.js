import Client from './client';
// {
//   userId: {
//     mentongId: client,
//     mentongId: client,
//   }
// }
const clients = {};

export function clearMentong(userId) {
  const user = clients[userId] || {};
  Object.values(user).forEach((mentong) => {
    mentong.close();
  });
  delete clients[userId];
}

export function removeMentong(userId, mentongId) {
  const user = clients[userId];
  if (user) {
    const client = user[mentongId];
    if (client) {
      client.close();
      delete clients[userId][mentongId];
    }
  }
}

export function createMentong(userId, mentongId, client) {
  clearMentong(userId);
  clients[userId] = clients[userId] || {};
  clients[userId][mentongId] = new Client(client);
}
