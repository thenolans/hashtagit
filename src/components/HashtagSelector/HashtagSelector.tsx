import { BuiltByTheNolans } from "@thenolans/nolan-ui";
import AddCategory from "components/AddCategory";
import Categories from "components/Categories";
import HashtagPreview from "components/HashtagPreview";
import PageLayout from "components/PageLayout";
import { CategoryProvider } from "contexts/categories";
import { HashtagProvider } from "contexts/hashtags";

function App() {
  return (
    <PageLayout>
      <HashtagProvider>
        <div className="space-y-4">
          <CategoryProvider>
            <Categories />
            <div className="max-w-xs mx-auto">
              <AddCategory />
            </div>
          </CategoryProvider>
        </div>
        <HashtagPreview />
      </HashtagProvider>
      <div className="mt-8">
        <BuiltByTheNolans />
      </div>
    </PageLayout>
  );
}

export default App;
