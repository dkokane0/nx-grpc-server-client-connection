import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Employee } from "../../../data/employee.dto";
// import { v4 as uuidv4 } from 'uuid';

@Controller()
export class AppController {
  // public employees : Employee[] = [];
  public employees : Employee = {} as any;

  @GrpcMethod('EmployeeService', 'Employee')  // localhost:3002  sum method call with message {12,12,12}
  Employee(body: { numbers: number }): { result: number } {
    console.log("message form client side :  ",body.numbers);
    return { result: body.numbers };
  }

// find all employee
@GrpcMethod('EmployeeService', 'findAllEmployee')   // from 
findAllEmployee() :any{
  // let res={emp:[
  //   {id:1,
  //   name:"Deepak"}
  // ]}
  console.log("controller on >>findAllEmployee: ",this.employees);

  return this.employees;
}


}
