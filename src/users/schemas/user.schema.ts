import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema(
  {
    uuid: String,
    name: String,
    email: String,
    password: String,
    createdAt: Date,
    updatedAt: Date,
  },
  {
    versionKey: false,
  },
)
