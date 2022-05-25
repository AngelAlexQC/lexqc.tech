import { ArticleList } from 'components/article/ArticleList';
import { NextPage } from 'next';
import { useGetArticles } from 'src/generated/articles/articles';

const Home: NextPage = () => {
  const { data: articles } = useGetArticles({
    username: 'angelalexqc',
  });
  return (
    <>
      {articles && (
        <>
          <ArticleList articles={articles} />
        </>
      )}
    </>
  );
};

export default Home;
