import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type UserDocument = User & Document;

@Schema({ versionKey: false })
export class User {
  @Prop()
    uuid: string

  @Prop()
    name: string

  @Prop({ unique: true })
    email: string

  @Prop()
    password: string

  @Prop({ type: Date })
    createdAt: Date

  @Prop({ type: Date })
    updatedAt: Date
}

export const UserSchema = SchemaFactory.createForClass(User)
