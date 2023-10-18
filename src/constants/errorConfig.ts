export const errors: Record<string, string> = {
  email: 'Format like example@email.com',
  login: 'From 3 to 20 characters, Latin (hyphens and underscores are allowed), can contain numbers, but not consist'
    + ' of them ',
  phone: 'From 10 to 15 numbers, can start with a plus',
  first_name: 'Latin or Cyrillic (only a hyphen is allowed), the first letter must be uppercase',
  second_name: 'Latin or Cyrillic (only a hyphen is allowed), the first letter must be uppercase',
  password: 'From 8 to 40 characters, at least one capital letter and a number are required',
  oldPassword: 'From 8 to 40 characters, at least one capital letter and a number are required',
  newPassword: 'From 8 to 40 characters, at least one capital letter and a number are required',
  password_again: 'Passwords do not match',
  title: 'Latin (only a hyphen is allowed), the first letter must be uppercase',
  avatar: 'File is required',
};
