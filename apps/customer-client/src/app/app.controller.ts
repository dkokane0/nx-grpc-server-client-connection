import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AppController {
  @GrpcMethod('EmployeeService', 'Employee')  // localhost:3002  sum method call with message {12,12,12}
  Employee(body: { numbers: number }): { result: number } {
    console.log("message form client side :  ",body.numbers);
    return { result: body.numbers };
  }
}
