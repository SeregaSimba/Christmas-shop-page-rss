import { createEll, addClass } from "../../../../utilities/createFunc";
import { CreateCatalog } from "../../../../utilities/createItemCatalog";

function CreateItemsShop() {
  CreateCatalog("FOR WORK", "CONSOLE.LOG GURU", "img/image.svg", "shopItems");
  CreateCatalog(
    "FOR HEALTH",
    "Posture Levitation",
    "img/image-2.svg",
    "shopItems"
  );
  CreateCatalog(
    "FOR HARMONY",
    "Bug Acceptance Guru",
    "img/image-3.svg",
    "shopItems"
  );

  CreateCatalog("FOR WORK", "BUG MAGNET", "img/image.svg", "shopItems");
  CreateCatalog("FOR HEALTH", "Step Master", "img/image-2.svg", "shopItems");
  CreateCatalog("FOR HARMONY", "Joy Charger", "img/image-3.svg", "shopItems");

  CreateCatalog("FOR WORK", "Merge Master", "img/image.svg", "shopItems");
  CreateCatalog("FOR HEALTH", "Snack Resister", "img/image-2.svg", "shopItems");
  CreateCatalog("FOR HARMONY", "Error Laugher", "img/image-3.svg", "shopItems");

  CreateCatalog("FOR WORK", "Shortcut Cheater", "img/image.svg", "shopItems");
  CreateCatalog("FOR HEALTH", "Hydration Bot", "img/image-2.svg", "shopItems");
  CreateCatalog(
    "FOR HARMONY",
    "Spontaneous Coding Philosopher",
    "img/image-3.svg",
    "shopItems"
  );
}

export { CreateItemsShop };
