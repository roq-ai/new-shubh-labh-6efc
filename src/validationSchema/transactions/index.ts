import * as yup from 'yup';

export const transactionValidationSchema = yup.object().shape({
  type: yup.string().required(),
  amount: yup.number().integer().required(),
  bank_id: yup.string().nullable(),
});
