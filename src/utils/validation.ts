const getErrorElement = (input: HTMLInputElement): Element => {
  if (input.nextElementSibling?.tagName === 'span') {
    return input.nextElementSibling;
  }
  return input.parentElement.nextElementSibling;
};

const validateInput = (input: HTMLInputElement): boolean => {
  if (!input.checkValidity()) {
    getErrorElement(input).classList.add('input-error_visible');
  } else {
    getErrorElement(input).classList.remove('input-error_visible');
  }

  return input.checkValidity();
};

export const validateField = (event: Event): void => {
  const input = event.target as HTMLInputElement;
  if (!input.value && !input.hasAttribute('required')) {
    return;
  }
  validateInput(input);
};

export const validateForm = (event: Event): void => {
  event.preventDefault();
  const { elements } = event.currentTarget as HTMLFormElement;
  const filledInputs: Record<string, string> = {};
  const isValidForm = Array.from(elements)
    .reduce((isValid, el) => {
      if (el instanceof HTMLInputElement) {
        if (el.value) filledInputs[el.getAttribute('name')] = el.value;
        return validateInput(el);
      }
      return isValid;
    }, true);
  console.log(filledInputs);
  console.log(isValidForm);
};
