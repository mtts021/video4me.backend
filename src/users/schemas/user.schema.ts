import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema(
  {
    uuid: String,
    name: String,
    email: String,
    password: {
      type: String,
      select: false,
    },
    createdAt: Date,
    updatedAt: Date,
  },
  {
    versionKey: false,
  },
)
