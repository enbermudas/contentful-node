import axios from 'axios';
import {
  CONTENTFUL_MANAGEMENT_URL,
  CONTENTFUL_DELIVERY_URL,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENVIRONMENT,
  CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
  CONTENTFUL_DELIVERY_ACCESS_TOKEN,
} from 'config/env';

class Request {
  constructor() {
    this.managementURL = `${CONTENTFUL_MANAGEMENT_URL}/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}/`;
    this.deliveryURL = `${CONTENTFUL_DELIVERY_URL}/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}/`;

    this.managementRequest = axios.create({
      baseURL: this.managementRequest,
      headers: {
        'Content-Type': 'application/vnd.contentful.management.v1+json',
        Authorization: `Bearer ${CONTENTFUL_MANAGEMENT_ACCESS_TOKEN}`,
      },
    });

    this.deliveryRequest = axios.create({
      baseURL: this.deliveryURL,
      headers: {
        Authorization: `Bearer ${CONTENTFUL_DELIVERY_ACCESS_TOKEN}`,
      },
    });
  }

  get(path) {
    return this.deliveryRequest.get(path);
  }
}

export default new Request();
