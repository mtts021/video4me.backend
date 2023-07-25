import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CreateUserMiddleware } from './middlewares/unique-email.middleware'
import { UserSchema } from './schemas/user.schema'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService],
})

export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CreateUserMiddleware)
      .forRoutes({ path: 'users', method: RequestMethod.POST })
  }
}
