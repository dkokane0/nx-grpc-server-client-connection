import { Controller, Inject, OnModuleInit } from '@nestjs/common';
import { GrpcMethod, ClientGrpc } from '@nestjs/microservices';
import { EmployeeServiceClient } from './interfaces/employee.interface';
// import { Employee } from "../../../data/employee.dto";
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

  @GrpcMethod('EmployeeApiService', 'EmployeeApi')
  EmployeeApi(body: EmployeeRequest) {
    console.log(body);
    let data=this.employeeService.Employee({ numbers: body.a }).toPromise();
    return data
  }
  // EmployeeApi(body) {
  //   console.log(body);
  //   return this.employeeService.Employee(body).toPromise();
  // }

  //  @Get('/findAll')
  @GrpcMethod('EmployeeApiService', 'findAllEmployeeApi')
  findAllEmployeeApi(){
return this.employeeService.findAllEmployee({})
}


}
