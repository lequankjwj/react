import { readCache } from '@/lib/readCache';
import { writeCache } from '@/lib/writeCache';

export default async function handlerCache(req, res, name, callback) {
  if (req.method === 'GET') {
    try {
      if (name) {
        const data = readCache(name);
        if (data) return res.json(data);

        const response = await callback;
        writeCache(name, response);
        return res.json(response);
      }
    } catch (error) {
      return null;
    }
  }
}
