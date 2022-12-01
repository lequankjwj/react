import fs from 'fs';
import path from 'path';

export const writeCache = (fileName: string, data: any) => {
  try {
    const filesDir = path.join(process.cwd(), 'cache');
    const pathFile = path.join(filesDir, `${fileName}.json`);
    const dataCache = JSON.stringify(data);

    fs.writeFileSync(pathFile, dataCache as string);
  } catch (error) {
    return null;
  }
};
