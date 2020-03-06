// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protosTypes from '../protos/protos';
import * as assert from 'assert';
import {describe, it} from 'mocha';
const applicationserviceModule = require('../src');

const FAKE_STATUS_CODE = 1;
class FakeError {
  name: string;
  message: string;
  code: number;
  constructor(n: number) {
    this.name = 'fakeName';
    this.message = 'fake message';
    this.code = n;
  }
}
const error = new FakeError(FAKE_STATUS_CODE);
export interface Callback {
  (err: FakeError | null, response?: {} | null): void;
}

export class Operation {
  constructor() {}
  promise() {}
}
function mockSimpleGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error: FakeError | null
) {
  return (actualRequest: {}, options: {}, callback: Callback) => {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}
describe('v4beta1.ApplicationServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      applicationserviceModule.v4beta1.ApplicationServiceClient.servicePath;
    assert(servicePath);
  });
  it('has apiEndpoint', () => {
    const apiEndpoint =
      applicationserviceModule.v4beta1.ApplicationServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });
  it('has port', () => {
    const port = applicationserviceModule.v4beta1.ApplicationServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });
  it('should create a client with no option', () => {
    const client = new applicationserviceModule.v4beta1.ApplicationServiceClient();
    assert(client);
  });
  it('should create a client with gRPC fallback', () => {
    const client = new applicationserviceModule.v4beta1.ApplicationServiceClient(
      {
        fallback: true,
      }
    );
    assert(client);
  });
  it('has initialize method and supports deferred initialization', async () => {
    const client = new applicationserviceModule.v4beta1.ApplicationServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    assert.strictEqual(client.applicationServiceStub, undefined);
    await client.initialize();
    assert(client.applicationServiceStub);
  });
  it('has close method', () => {
    const client = new applicationserviceModule.v4beta1.ApplicationServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    client.close();
  });
  describe('createApplication', () => {
    it('invokes createApplication without error', done => {
      const client = new applicationserviceModule.v4beta1.ApplicationServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.talent.v4beta1.ICreateApplicationRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createApplication = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.createApplication(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createApplication with error', done => {
      const client = new applicationserviceModule.v4beta1.ApplicationServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.talent.v4beta1.ICreateApplicationRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createApplication = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.createApplication(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('getApplication', () => {
    it('invokes getApplication without error', done => {
      const client = new applicationserviceModule.v4beta1.ApplicationServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.talent.v4beta1.IGetApplicationRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getApplication = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getApplication(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getApplication with error', done => {
      const client = new applicationserviceModule.v4beta1.ApplicationServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.talent.v4beta1.IGetApplicationRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getApplication = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getApplication(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('updateApplication', () => {
    it('invokes updateApplication without error', done => {
      const client = new applicationserviceModule.v4beta1.ApplicationServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.talent.v4beta1.IUpdateApplicationRequest = {};
      request.application = {};
      request.application.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateApplication = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.updateApplication(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateApplication with error', done => {
      const client = new applicationserviceModule.v4beta1.ApplicationServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.talent.v4beta1.IUpdateApplicationRequest = {};
      request.application = {};
      request.application.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateApplication = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.updateApplication(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('deleteApplication', () => {
    it('invokes deleteApplication without error', done => {
      const client = new applicationserviceModule.v4beta1.ApplicationServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.talent.v4beta1.IDeleteApplicationRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteApplication = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.deleteApplication(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deleteApplication with error', done => {
      const client = new applicationserviceModule.v4beta1.ApplicationServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.talent.v4beta1.IDeleteApplicationRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteApplication = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.deleteApplication(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('listApplications', () => {
    it('invokes listApplications without error', done => {
      const client = new applicationserviceModule.v4beta1.ApplicationServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.talent.v4beta1.IListApplicationsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock Grpc layer
      client._innerApiCalls.listApplications = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      client.listApplications(request, (err: FakeError, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });
  });
  describe('listApplicationsStream', () => {
    it('invokes listApplicationsStream without error', done => {
      const client = new applicationserviceModule.v4beta1.ApplicationServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.talent.v4beta1.IListApplicationsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {response: 'data'};
      // Mock Grpc layer
      client._innerApiCalls.listApplications = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      const stream = client
        .listApplicationsStream(request, {})
        .on('data', (response: {}) => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', (err: FakeError) => {
          done(err);
        });
      stream.write(expectedResponse);
    });
  });
});
