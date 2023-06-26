import { BankInterface } from 'interfaces/bank';
import { GetQueryInterface } from 'interfaces';

export interface LoanInterface {
  id?: string;
  amount: number;
  due_date: any;
  bank_id?: string;
  created_at?: any;
  updated_at?: any;

  bank?: BankInterface;
  _count?: {};
}

export interface LoanGetQueryInterface extends GetQueryInterface {
  id?: string;
  bank_id?: string;
}
