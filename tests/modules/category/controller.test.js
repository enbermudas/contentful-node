import request from 'utils/request';
import { get } from 'modules/category/controller';

jest.mock('utils/request');

const mockedEntries = {
  data: {
    items: [],
  },
};

const mockReq = () => ({});

const mockRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(mockedEntries);
  return res;
};

describe('Server', () => {
  it('Should return a json response if the request is resolved', async () => {
    const mockedReq = mockReq();
    const mockedRes = mockRes();
    const mockedNext = jest.fn();
    request.get.mockResolvedValue(mockedEntries);

    const response = await get(mockedReq, mockedRes, mockedNext);

    expect(response.data).toEqual(mockedEntries.data);
    expect(mockedRes.json).toHaveBeenCalledWith(mockedEntries.data);
  });

  it('Should catch an error if the request is not resolved', async () => {
    const mockedReq = mockReq();
    const mockedRes = mockRes();
    const mockedNext = jest.fn();
    request.get.mockReturnValueOnce(Promise.reject('error'));

    await get(mockedReq, mockedRes, mockedNext);

    expect(mockedNext.mock.calls.length).toBe(1);
  });
});
