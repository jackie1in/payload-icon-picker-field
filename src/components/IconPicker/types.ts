import dynamicIconImports from 'lucide-react/dynamicIconImports';
import type { FieldClientComponent, StaticDescription, StaticLabel, TextFieldClient, TextFieldValidation } from 'payload';
import type React from 'react';
import { ChangeEvent } from 'react';
import type { MarkOptional } from 'ts-essentials';

export type SharedIconPickerFieldProps =
  | {
    readonly hasMany?: false
    readonly onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  }

export type IconPickerInputProps = {
  readonly AfterInput?: React.ReactNode
  readonly BeforeInput?: React.ReactNode
  readonly className?: string
  readonly Description?: React.ReactNode
  readonly description?: StaticDescription
  readonly Error?: React.ReactNode
  readonly inputRef?: React.RefObject<HTMLInputElement>
  readonly Label?: React.ReactNode
  readonly label?: StaticLabel
  readonly localized?: boolean
  readonly onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
  readonly path: string
  readonly placeholder?: Record<string, string> | string
  readonly readOnly?: boolean
  readonly required?: boolean
  readonly rtl?: boolean
  readonly showError?: boolean
  readonly style?: React.CSSProperties
  readonly value?: keyof typeof dynamicIconImports
} & SharedIconPickerFieldProps

type IconPickerFieldClientWithoutType = MarkOptional<TextFieldClient, 'type'>;
type IconPickerFieldBaseClientProps = {
  readonly icons?: Record<string, string>
  readonly inputRef?: React.RefObject<HTMLInputElement>;
  readonly onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  readonly path: string;
  readonly validate?: TextFieldValidation;
};
export type IconPickerFieldClientComponent = FieldClientComponent<IconPickerFieldClientWithoutType, IconPickerFieldBaseClientProps>;
