import { getModelToken } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { userMock, userMockReturn } from './test-utils/service-mocks'
import { UsersService } from './users.service'

class MockRepository {
  constructor(private data) {}

  create = jest.fn().mockResolvedValue(this.data).mockReturnValue(userMockReturn)

  save = jest.fn().mockResolvedValue(this.data).mockReturnValue(userMockReturn)
}

describe('UsersService', () => {
  let service: UsersService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: getModelToken('Users'), useValue: MockRepository },
      ],
    }).compile()

    service = module.get<UsersService>(UsersService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('create', () => {
    it('should create a user', async () => {
      const createSpy = jest.spyOn(service, 'create')
      const createUser = await service.create(userMock)

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
