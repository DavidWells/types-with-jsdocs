import * as TypeFest from 'type-fest'

export type Pet = {
  name: string,
};

/* Export global types to avoid imports */
declare global {
  type SomethingGlobal = 'value' | 'value2'
  type CamelCasedPropsGlobal<T> = { [K in keyof T as TypeFest.CamelCase<K>]: T[K] };
  // ────────────see enumns───────────
  type Values<T> = T[keyof T];
  type RuneTierE = {
    COMMON: 1;
    SEMIRARE: 2;
    RARE: 3;
  };
  type RuneTier = Values<RuneTierE>;
  // https://gist.github.com/nicolashery/b30d0464dbd016aa3978129652aa1385
  namespace Models {
    type ProductTag = "popular" | "featured" | "sale";
    interface ProductTagEnum {
      Popular: "popular";
      Featured: "featured";
      Sale: "sale";
    }

    interface Product {
      id: string;
      name: string;
      tags: Array<ProductTag>;
    }
  }
  /* https://www.benmvp.com/blog/polymorphic-react-components-typescript/ */
  // Source: https://github.com/emotion-js/emotion/blob/master/packages/styled-base/types/helper.d.ts
  // A more precise version of just React.ComponentPropsWithoutRef on its own
  type PropsOf<
    C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
  > = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>

  type AsProp<C extends React.ElementType> = {
    /**
     * An override of the default HTML tag.
     * Can also be another React component.
     */
    as?: C
  }
  /**
   * Allows for extending a set of props (`ExtendedProps`) by an overriding set of props
   * (`OverrideProps`), ensuring that any duplicates are overridden by the overriding
   * set of props.
   */
  type ExtendableProps<
    ExtendedProps = {},
    OverrideProps = {}
  > = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>
  /**
   * Allows for inheriting the props from the specified element type so that
   * props like children, className & style work, as well as element-specific
   * attributes like aria roles. The component (`C`) must be passed in.
   */
  type InheritableElementProps<
    C extends React.ElementType,
    Props = {}
  > = ExtendableProps<PropsOf<C>, Props>
  /**
   * A more sophisticated version of `InheritableElementProps` where
   * the passed in `as` prop will determine which props can be included
   */
  type PolymorphicComponentProps<
    C extends React.ElementType,
    Props = {}
  > = InheritableElementProps<C, Props & AsProp<C>>
}
