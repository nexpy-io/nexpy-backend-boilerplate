import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'

import { ExtractJwt, Strategy } from 'passport-jwt'
import { APP_AUTH_SIGN_SECRET_KEY } from 'src/environment'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: APP_AUTH_SIGN_SECRET_KEY,
    })
  }

  async validate(payload: any) {
    return { id: payload.sub, email: payload.email }
  }
}
