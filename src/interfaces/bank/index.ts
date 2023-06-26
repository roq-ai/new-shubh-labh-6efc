import { LoanInterface } from 'interfaces/loan';
import { TransactionInterface } from 'interfaces/transaction';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BankInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  loan?: LoanInterface[];
  transaction?: TransactionInterface[];
  user?: UserInterface;
  _count?: {
    loan?: number;
    transaction?: number;
  };
}

export interface BankGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
