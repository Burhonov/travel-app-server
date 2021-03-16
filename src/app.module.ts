import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { CountryModule } from './country/country.module';
const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}`, {
      dbName: DB_NAME,
      useNewUrlParser: true,
      useCreateIndex: true,
    }),
    AuthModule,
    CommonModule,
    CountryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
