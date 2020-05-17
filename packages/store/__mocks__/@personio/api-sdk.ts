/* eslint-disable */
import { Candidate, FatalError } from '@personio/api-sdk';

const baseApiSdk = jest.genMockFromModule('@personio/api-sdk');

let mockResponse = Object.create(null);

const __setMockResponse = (response: { data: Array<Candidate> } | { error: FatalError }) =>
  (mockResponse = response);

class CandidatesApi {
  candidatesGet(): Promise<Array<Candidate> | { error: FatalError }> {
    return Promise.resolve(mockResponse);
  }
}

// @ts-ignore
baseApiSdk.CandidatesApi = CandidatesApi;
// @ts-ignore
baseApiSdk.__setMockResponse = __setMockResponse;

module.exports = baseApiSdk;
