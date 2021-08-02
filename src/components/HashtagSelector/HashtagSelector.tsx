import AddCategory from "components/AddCategory";
import Categories from "components/Categories";
import Footer from "components/Footer";
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
            <AddCategory />
          </CategoryProvider>
        </div>
        <HashtagPreview />
      </HashtagProvider>
      <Footer />
    </PageLayout>
  );
}

export default App;
