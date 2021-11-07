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
}
