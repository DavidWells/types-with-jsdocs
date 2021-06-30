// Via https://github.com/typescript-cheatsheets/react#basic-prop-types-examples

export declare interface AppProps {
  children1: JSX.Element; // bad, doesnt account for arrays
  children2?: JSX.Element | JSX.Element[]; // meh, doesn't accept strings
  children3?: React.ReactChildren; // despite the name, not at all an appropriate type; it is a utility
  children4?: React.ReactChild[]; // better, accepts array children
  children?: React.ReactNode; // best, accepts everything (see edge case below)
  functionChildren?: (name: string) => React.ReactNode; // recommended function as a child render prop type
  style?: React.CSSProperties; // to pass through style props
  onChange?: React.FormEventHandler<HTMLInputElement>; // form events! the generic parameter is the type of event.target
  // //  more info: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#wrappingmirroring
  // props: Props & React.ComponentPropsWithoutRef<"button">; // to impersonate all the props of a button element and explicitly not forwarding its ref
  // props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef>; // to impersonate all the props of MyButtonForwardedRef and explicitly forwarding its ref
}