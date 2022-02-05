import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Repository } from 'typeorm'

import { User } from './entities/user.entity'

// TODO: Temp logic

export type UserTemp = any

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  private readonly users = [
    {
      id: 1,
      email: 'john@mail.com',
      password: 'changeme',
    },
    {
      id: 2,
      email: 'maria@mail.com',
      password: 'guess',
    },
  ]

  async findOne(email: string): Promise<UserTemp | undefined> {
    return this.users.find(user => user.email === email)
  }
}
