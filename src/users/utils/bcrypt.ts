import * as bcrypt from 'bcrypt'

export async function encodePassword(password: string): Promise<string> {
  const SALT = await bcrypt.genSalt()
  return bcrypt.hash(password, SALT)
}
