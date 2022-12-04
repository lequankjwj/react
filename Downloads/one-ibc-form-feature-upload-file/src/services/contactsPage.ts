import { CACHE_MAIN_CONTACTS_CUSTOMER_SERVICE } from '@/constants';
import { writeCache } from '@/lib/writeCache';
import { serverRequest } from '@utils/api';
import { to } from '@utils/await-to-js';

const oneIbcContacts = {
  getCustomerService: async (payload) => {
    const [error, response] = await to(
      serverRequest.request({
        method: 'POST',
        url: '/frontend/customer-service',
        data: payload,
      }),
    );
    if (!error) writeCache(CACHE_MAIN_CONTACTS_CUSTOMER_SERVICE, response);
    return response;
  },
};

export default oneIbcContacts;
