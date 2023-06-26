import * as yup from 'yup';

export const loanValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  due_date: yup.date().required(),
  bank_id: yup.string().nullable(),
});
