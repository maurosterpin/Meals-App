import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

function renderCategotyItem(item) {
  return;
}

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategotyItem}
    />
  );
}

export default CategoriesScreen;
