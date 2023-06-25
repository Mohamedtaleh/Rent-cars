import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisable?: boolean;
}
export interface SearchFacturerProps{
    manuFacturer: string;
    setManuFacturer: (manuFacturer: string) => void;

}
export interface CarProps{
    city_mpg: number;
    class: string;
    combination: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type:string
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;

}

export interface SearchButtonProps{
    otherClasses?: string;
}
export interface FilterProps{
    manuFacturer: string
    year: number
    fuel: string
    limit: number
    model: string
}
export interface OptionsProps{
    title: string,
    value : string,
}

export interface CustomFilterProps{
    title: string,
    options: OptionsProps[]
}


export interface showMoreProps {
    pageNumber: number;
    isNext: boolean;
}
