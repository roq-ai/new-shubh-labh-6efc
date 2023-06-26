const mapping: Record<string, string> = {
  banks: 'bank',
  loans: 'loan',
  transactions: 'transaction',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
