export const getMessage = (form: HTMLFormElement): string => (form.children as any).message.value;
