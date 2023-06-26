import { BankInterface } from 'interfaces/bank';
import { GetQueryInterface } from 'interfaces';

export interface TransactionInterface {
  id?: string;
  type: string;
  amount: number;
  bank_id?: string;
  created_at?: any;
  updated_at?: any;

  bank?: BankInterface;
  _count?: {};
}

export interface TransactionGetQueryInterface extends GetQueryInterface {
  id?: string;
  type?: string;
  bank_id?: string;
}
