import { Request, Response } from 'express';
import { ProducersController } from '../src/controllers/producers.controller';
import { ProducersUseCase } from '../src/useCases/producers.useCase';
import { TProducer, UserDTOUpdate } from '../src/types/TProducer.type';

jest.mock('../src/useCases/producers.useCase');

describe('ProducersController', () => {
  let producersController: ProducersController;
  let req: Partial<Request>;
  let res: Partial<Response>;
  let statusMock: jest.Mock;
  let jsonMock: jest.Mock;
  const mockPayload: TProducer = { 
    cpf: 46662795801,
    cnpj: 46662795801111,
    producer_name: "test 3",
    farm_name: "teste farm_name",
    city: "city",
    state: "state",
    area_total_hectares: 10,
    area_agricultura_hectares: 5,
    area_vegetacao_hectares: 5,
    culture: "soja"
  };
  beforeEach(() => {
    statusMock = jest.fn().mockReturnThis();
    jsonMock = jest.fn();
    req = {};
    res = {
      status: statusMock,
      json: jsonMock,
    };

    producersController = new ProducersController();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('post', () => {
    it('should return 201 and result on success', async () => {
      const mockResult = { id: '1', ...mockPayload };
      req.body = mockPayload;

      (ProducersUseCase.prototype.post as jest.Mock).mockResolvedValue(mockResult);

      await producersController.post(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(201);
      expect(jsonMock).toHaveBeenCalledWith(mockResult);
    });

    it('should return 400 and error message on failure', async () => {
      const mockError = { error: true, message: 'Invalid data' };
      req.body = mockPayload;

      (ProducersUseCase.prototype.post as jest.Mock).mockResolvedValue(mockError);

      await producersController.post(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith('Invalid data');
    });
  });

  describe('patch', () => {
    it('should return 201 and result on success', async () => {
      const mockPayload: UserDTOUpdate = { name: 'John Doe Updated' };
      const mockResult = { id: '1', name: 'John Doe Updated' };
      req.body = mockPayload;
      req.params = { id: '1' };

      (ProducersUseCase.prototype.patch as jest.Mock).mockResolvedValue(mockResult);

      await producersController.patch(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(201);
      expect(jsonMock).toHaveBeenCalledWith(mockResult);
    });

    it('should return 400 and error on failure', async () => {
      const mockPayload: UserDTOUpdate = { name: 'John Doe Updated' };
      const mockError = new Error('Update failed');
      req.body = mockPayload;
      req.params = { id: '1' };

      (ProducersUseCase.prototype.patch as jest.Mock).mockRejectedValue(mockError);

      await producersController.patch(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith(mockError);
    });
  });

  describe('delete', () => {
    it('should return 201 and result on success', async () => {
      const mockResult = { id: '1', message: 'Deleted successfully' };
      req.params = { id: '1' };

      (ProducersUseCase.prototype.delete as jest.Mock).mockResolvedValue(mockResult);

      await producersController.delete(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(201);
      expect(jsonMock).toHaveBeenCalledWith(mockResult);
    });

    it('should return 400 and error on failure', async () => {
      const mockError = new Error('Delete failed');
      req.params = { id: '1' };

      (ProducersUseCase.prototype.delete as jest.Mock).mockRejectedValue(mockError);

      await producersController.delete(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith(mockError);
    });
  });
});
