import Client from './client';
let client = null;

export function removeMentong() {
  if (client) {
    client.close();
    client = null;
  }
}

export function createMentong(setting) {
  return new Promise((resolve) => {
    client = new Client({ ...setting, callback: (result) => {
      resolve(result);
    } });
  })
}

export function getMentongStatusHelper() {
  return (client || {}).status || false;
}
