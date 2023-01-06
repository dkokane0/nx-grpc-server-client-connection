import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { resolve } from 'path';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'EMPLOYEE_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'employee',
          protoPath: resolve(__dirname, '../../../proto/employee.proto'),
          url: 'localhost:3002',
        },
      },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule {}
