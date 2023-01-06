import { Observable } from 'rxjs';

export interface EmployeeServiceClient {
  Employee: (data: { numbers: number }) => Observable<{ result: number }>;
}
