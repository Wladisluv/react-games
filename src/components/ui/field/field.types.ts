import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from "@mui/material";

export interface IFieldProps {
    placeholder: string
    error?: FieldError
    Icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
}

export type TypeInputProps = InputHTMLAttributes<HTMLInputElement> & IFieldProps;