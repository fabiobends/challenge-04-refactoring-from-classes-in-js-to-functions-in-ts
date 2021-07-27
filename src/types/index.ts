import { IconType } from "react-icons";
import { ReactNode, InputHTMLAttributes } from "react";

export interface FoodType {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

export interface FoodProps {
  food: FoodType;
  handleEditFood: (food: FoodType) => void;
  handleDelete: (id: number) => void;
}

export interface ContainerFoodStyleProps {
  available: boolean;
}

export interface HeaderProps {
  openModal: () => void;
}

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children?: ReactNode;
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  icon?: IconType;
};

export interface ContainerInputStyleProps {
  isFilled: boolean;
  isFocused: boolean;
}
