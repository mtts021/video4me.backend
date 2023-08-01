import { getModelToken } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { userMock, userMockReturn } from './test-utils/service-mocks'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'

describe('UsersController', () => {
  let controller: UsersController

  class MockRepositoryService {
    constructor(private data) {}

    create = jest.fn().mockResolvedValue(this.data).mockReturnValue(userMockReturn)

    save = jest.fn().mockResolvedValue(this.data).mockReturnValue(userMockReturn)
  }

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        { provide: getModelToken('Users'), useValue: MockRepositoryService },
      ],
    }).compile()

    controller = module.get<UsersController>(UsersController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  describe('when create product', () => {
    it('should create a product and return it', async () => {
      const createSpy = jest.spyOn(controller, 'create')
      const createUser = await controller.create(userMock)

      expect(createUser).toEqual(userMockReturn)
      expect(createUser).toMatchObject(userMockReturn)
      expect(createUser.uuid).toBeDefined()
      expect(createUser.createdAt).toBeDefined()
      expect(createUser.updatedAt).not.toBeDefined()
      expect(createUser.name).toBeDefined()
      expect(createUser.email).toBeDefined()
      expect(createSpy).toBeCalledWith(userMock)
      expect(createSpy).toHaveBeenCalled()
      expect(createSpy).toBeCalledTimes(1)
    })
  })
})
