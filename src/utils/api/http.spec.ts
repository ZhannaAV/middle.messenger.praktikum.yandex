import sinon from 'sinon';
import { expect } from 'chai';
import { Http, METHODS } from './http';

describe('http requests', () => {
  it('urlParams for GET', () => {
    const http = new Http('');
    const requestStub = sinon.stub(http, '_request').resolves();
    http.get('/get', { params: { a: 1, b: 'hello' } });
    const expectedUrl = '/get?a=1&b=hello';
    expect(requestStub.calledWithMatch(expectedUrl, { method: METHODS.GET })).to.be.true; // eslint-disable-line
  });

  it('body for PUT/POST', () => {
    const http = new Http('');
    const requestStub = sinon.stub(http, '_request').resolves();
    http.put('/put', { data: JSON.stringify({ a: 1, b: 'hello' }) });
    const expectedData = '{"a":1,"b":"hello"}';
    expect(requestStub.calledWithMatch('/put', { data: expectedData, method: METHODS.PUT })).to.be.true; // eslint-disable-line
  });

  it('timeout for DELETE', () => {
    const http = new Http('');
    const requestStub = sinon.stub(http, '_request').resolves();
    const timeout = 3000;
    http.delete('/delete', { data: JSON.stringify({ a: 1 }), timeout });
    const expectedData = '{"a":1}';
    expect(requestStub.calledWithMatch('/delete', { data: expectedData, method: METHODS.DELETE, timeout })).to.be.true; // eslint-disable-line

  });
});
