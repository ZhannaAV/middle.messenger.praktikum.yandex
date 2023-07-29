import { Block } from '../utils/block';

export interface IEvents {
  events?: Record<string, () => void>
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
