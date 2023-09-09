import { TEvent } from '../models/models';
import { IIndex } from '../store/model';

const getErrorElement = (input: HTMLInputElement): Element => {
  if (input.nextElementSibling?.tagName !== 'SPAN' && input.parentElement) {
    <Element>input.parentElement.nextElementSibling;
  }
  return <Element>input.nextElementSibling;
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
  const filledInputs: IIndex = {};
  const isValidForm = Array.from(elements)
    .reduce((isValid, el) => {
      if (el instanceof HTMLInputElement) {
        if (el.name === 'password_again') {
          el.setAttribute('pattern', `^${filledInputs.password || filledInputs.newPassword}$`);
        } else if (el.getAttribute('name') && el.value) filledInputs[el.getAttribute('name') as string] = el.value;
        return validateInput(el);
      }
      return isValid;
    }, true);

  return {
    isValidForm,
    filledInputs,
    form
  };
};
