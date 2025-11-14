export interface Product {
  Id: string;
  Name: string;
  NameWithoutBrand: string;
  Brand: {
    Name: string;
  };
  Category: string;
  Images: {
    PrimarySmall: string;
    PrimaryMedium: string;
    PrimaryLarge: string;
  };
  FinalPrice: number;
  ListPrice: number;
  SuggestedRetailPrice: number;
  DescriptionHtmlSimple: string;
  Colors: Array<{
    ColorName: string;
    ColorChipImageSrc: string;
  }>;
  SelectedColor?: string;
}
