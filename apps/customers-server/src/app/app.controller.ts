import { Controller, Inject, OnModuleInit } from '@nestjs/common';
import { GrpcMethod, ClientGrpc } from '@nestjs/microservices';
import { EmployeeServiceClient } from './interfaces/employee.interface';

interface EmployeeRequest {
  a: number;
}

@Controller()
export class AppController implements OnModuleInit {
  private employeeService: EmployeeServiceClient;

  constructor(@Inject('EMPLOYEE_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.employeeService = this.client.getService<EmployeeServiceClient>(
      'EmployeeService'
    );
  }
// let data = 123;
  @GrpcMethod('EmployeeApiService', 'EmployeeApi')
  EmployeeApi(body: EmployeeRequest) {
    console.log(body);
    let data=this.employeeService.Employee({ numbers: body.a }).toPromise();
  // console.log(data);
    return data
  }
  // EmployeeApi(body) {
  //   console.log(body);
  //   return this.employeeService.Employee(body).toPromise();
  // }
}
