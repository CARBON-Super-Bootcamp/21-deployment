import { httpClient as client } from '../lib/http-client';

import { SERVICE_BASEURL } from './config';

export function summary() {
  return client.get(`${SERVICE_BASEURL}/summary`);
}
