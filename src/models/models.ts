import { Block } from '../utils/block';

export type TEvent<T extends HTMLElement = HTMLElement & HTMLFormElement & HTMLInputElement> = Event & {
  target: T;
  currentTarget: T;
}

export interface IEvents {
  events?: Record<string, (e:TEvent) => void>
}

export interface IChildren extends IEvents{
  children: Record<string, Block | Block[]>;
}

export interface IFormField {
  label: string;
  name: string;
  type: string;
  isRequired: boolean;
  pattern?: string;
  value?: string;
}

export interface IErrorResponse {
  reason: string
}
