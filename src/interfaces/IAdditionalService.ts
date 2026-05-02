import { ReactNode } from "react";

export interface IAdditionalService {
  id: string;
  name: ReactNode;
  img: string;
  alt: string;
  children?: ReactNode;
  reversed?: boolean;
}