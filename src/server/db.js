import fs from 'fs';
import path from 'path';

export function writeMentong(mentong) {
  fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(mentong));
}

export function readMentong() {
  let mentong = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf-8');
  try {
    mentong = JSON.parse(mentong);
    return mentong;
  } catch (error) {
    throw new httpErrors.BadRequestError('门童不存在');
  }
}

export function updateMentong(newMentong) {
  const mentong = readMentong();
  writeMentong(Object.assign(mentong, newMentong));
}
