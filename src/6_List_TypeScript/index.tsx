import React from 'react'

type Props = {
  message: string;
  count?: number;
  disabled?: boolean;
  /** array of a type! */
  names?: string[];
  /** string literals to specify exact string values, with a union type to join them together */
  status?: "waiting" | "success";
  /** any object as long as you dont use its properties (NOT COMMON but useful as placeholder) */
  obj?: object;
  obj2?: {}; // almost the same as `object`, exactly the same as `Object`
  /** an object with any number of properties (PREFERRED) */
  obj3?: {
    id: string;
    title: string;
  };
  /** array of objects! (common) */
  objArr?: {
    id: string;
    title: string;
  }[];
  /** any function as long as you don't invoke it (not recommended) */
  onSomething?: Function;
  /** function with named prop (VERY COMMON) */
  onChange?: (id: number) => void;
  /** alternative function type syntax that takes an event (VERY COMMON) */
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
};

export default function List(props: Props) {
  return (
    <div>
      List component
    </div>
  )
}