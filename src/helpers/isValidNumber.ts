// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isValidNumber = (id: any) => {
  if (typeof id !== 'number') {
    return false;
  }

  if (Number.isNaN(id) || !isFinite(id) || id < 0) {
    return false;
  }

  return true;
};
