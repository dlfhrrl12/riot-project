import ItemCards from "@/components/item-card";
import { Item } from "@/types/Items";
import { fetchItemList } from "@/utils/serverApi";

const ItemListPage = async () => {
  const items: Record<string, Item> = await fetchItemList();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-red-600">아이템 목록</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Object.entries(items).map(
          ([id, item]) =>
            item.gold.sell !== 0 && <ItemCards key={id} id={id} item={item} />
        )}
      </div>
    </div>
  );
};

export default ItemListPage;
