import { TEvent } from '../models/models';

const getErrorElement = (input: HTMLInputElement): Element => {
  if (input.nextElementSibling?.tagName === 'SPAN') {
    return input.nextElementSibling;
  }
  return input.parentElement.nextElementSibling;
};

const validateInput = (input: HTMLInputElement): boolean => {
  if (!input.checkValidity()) {
    getErrorElement(input)
      .classList
      .add('input-error_visible');
  } else {
    getErrorElement(input)
      .classList
      .remove('input-error_visible');
  }

  return input.checkValidity();
};

export const validateField = (event: TEvent<HTMLInputElement>): void => {
  const input = event.target;
  if (!input.value && !input.hasAttribute('required')) {
    return;
  }
  validateInput(input);
};

interface IValidationResult {
  isValidForm: boolean;
  filledInputs: Record<string, any>;
  form: HTMLFormElement;
}

export const validateForm = (form: HTMLFormElement): IValidationResult => {
  const { elements } = form;
  const filledInputs: Record<string, string> = {};
  const isValidForm = Array.from(elements)
    .reduce((isValid, el) => {
      if (el instanceof HTMLInputElement) {
        if (el.name === 'password_again') {
          el.setAttribute('pattern', `^${filledInputs.password || filledInputs.newPassword}$`);
        } else if (el.value) filledInputs[el.getAttribute('name')] = el.value;
        return validateInput(el);
      }
      return isValid;
    }, true);
  console.log(filledInputs);
  console.log(isValidForm);

  return {
    isValidForm,
    filledInputs,
    form
  };
};
