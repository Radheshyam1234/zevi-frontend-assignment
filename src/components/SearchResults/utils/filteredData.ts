import { useFilterData } from "../../../Context/FilterContext/FilterProvider";
import { ProductType } from "../../../utilities/dataTypes";
export const FilteredData = (productList: ProductType[]) => {
  const {
    filterState: {
      byRating,
      applySearch,
      byPriceRange: { minPrice, maxPrice },
      byCategories,
    },
  } = useFilterData();

  let ModifiedData = [...productList];

  if (byCategories.length !== 0) {
    ModifiedData = ModifiedData.filter((product) => {
      return byCategories.includes(product.category);
    });
  }

  if (byRating) {
    ModifiedData = ModifiedData.filter(
      (product) => Math.ceil(Number(product.rating.rate)) >= byRating
    );
  }
  if (applySearch) {
    ModifiedData = ModifiedData.filter(
      (product) =>
        product.category
          .toLocaleLowerCase()
          .includes(applySearch.toLocaleLowerCase()) ||
        product.title
          .toLocaleLowerCase()
          .includes(applySearch.toLocaleLowerCase()) ||
        product.description
          .toLocaleLowerCase()
          .includes(applySearch.toLocaleLowerCase())
    );
  }
  if (!minPrice && maxPrice) {
    ModifiedData = ModifiedData.filter(
      (product) => Math.floor(Number(product.price) * 100) < maxPrice
    );
  }
  if (minPrice && maxPrice) {
    ModifiedData = ModifiedData.filter(
      (product) =>
        Math.floor(Number(product.price) * 100) > minPrice &&
        Math.floor(Number(product.price) * 100) < maxPrice
    );
  }
  if (minPrice && !maxPrice) {
    ModifiedData = ModifiedData.filter(
      (product) => Math.floor(Number(product.price) * 100) > minPrice
    );
  }
  return ModifiedData;
};
