import {
  CACHE_FOOTER,
  CACHE_GET_UPDATE_SECTION,
  CACHE_LIST_SERVICE,
  CACHE_MENU_TOP,
} from '@/constants';
import { writeCache } from '@/lib/writeCache';
import { serverRequest } from '@utils/api';
import { to } from '@utils/await-to-js';

const commonService = {
  getMenuHeader: async (payload) => {
    const [error, menuHeader] = await to(
      serverRequest.request({
        method: 'POST',
        url: '/frontend/general/menu/hearder',
        data: payload,
      }),
    );
    if (!error) writeCache(CACHE_MENU_TOP, menuHeader);
    return menuHeader;
  },

  getMenuFooter: async (payload) => {
    const [error, menuFooter] = await to(
      serverRequest.request({
        method: 'POST',
        url: '/frontend/general/menu/footer',
        data: payload,
      }),
    );
    if (!error) writeCache(CACHE_FOOTER, menuFooter);
    return menuFooter;
  },

  getBanner: async (payload, cacheName) => {
    const [error, response] = await to(
      serverRequest.request({
        method: 'POST',
        url: '/frontend/banner',
        data: payload,
      }),
    );
    if (!error) writeCache(cacheName, response);
    return response;
  },

  getServiceData: async (payload) => {
    const [error, response] = await to(
      serverRequest.request({
        method: 'POST',
        url: '/frontend/service',
        data: payload,
      }),
    );
    if (!error) writeCache(CACHE_LIST_SERVICE, response);
    return response;
  },

  getInsightUpdate: async (payload) => {
    const [error, response] = await to(
      serverRequest.request({
        method: 'POST',
        url: '/frontend/insight/articles/home',
        data: payload,
      }),
    );
    if (!error) writeCache(CACHE_GET_UPDATE_SECTION, response);
    return response;
  },
};

export default commonService;
