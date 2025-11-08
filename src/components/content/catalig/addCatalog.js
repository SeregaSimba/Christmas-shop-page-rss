import { CreateItemsCatalogSection1 } from "./firstCatalog";
import { CreateCatalogSection2 } from "./secondCatalog";
import { CreateCatalogSection3 } from "./thirdCatalog";

function AddCatalog() {
  CreateItemsCatalogSection1();
  CreateCatalogSection2();
  CreateCatalogSection3();
}

export { AddCatalog };
