import { Request, Response } from 'express';
import { TotalsController } from '../src/controllers/total.controller';
import { TotalUserCase } from '../src/useCases/total.userCase';

jest.mock('../src/useCases/total.userCase');
jest.mock('../src/repositories/totals.repository');

describe('TotalsController', () => {
  let totalsController: TotalsController;
  let req: Partial<Request>;
  let res: Partial<Response>;
  let statusMock: jest.Mock;
  let jsonMock: jest.Mock;

  beforeEach(() => {    
    statusMock = jest.fn().mockReturnThis();
    jsonMock = jest.fn();
    req = {};
    res = {
      status: statusMock,
      json: jsonMock,
    };

    totalsController = new TotalsController();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return 200 and result on success', async () => {    
    const mockResult = { total: 100 };
    (TotalUserCase.prototype.get as jest.Mock).mockResolvedValue(mockResult);

    await totalsController.get(req as Request, res as Response);

    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith(mockResult);
  });

  it('should return 400 and error on failure', async () => {
    const mockError = new Error('Something went wrong');
    (TotalUserCase.prototype.get as jest.Mock).mockRejectedValue(mockError);

    await totalsController.get(req as Request, res as Response);

    expect(statusMock).toHaveBeenCalledWith(400);
    expect(jsonMock).toHaveBeenCalledWith(mockError);
  });
});
