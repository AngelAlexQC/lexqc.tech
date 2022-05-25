import { NextPage, NextPageContext } from 'next';
import { getArticleByPath } from 'src/generated/articles/articles';
import { ArticleShow } from 'src/generated/models';
const ArticlePage: NextPage<{ article: ArticleShow }> = ({ article }) => {
  return (
    <>
      {article && (
        <>
          <h1>{article.title}</h1>
          {/* Inject HTML */}
          <div dangerouslySetInnerHTML={{ __html: article.body_html }} />
        </>
      )}
    </>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const {
    query: { slug },
  } = context;
  if (!slug) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  const article = await getArticleByPath('angelalexqc', slug as string);
  return {
    props: {
      article,
    },
  };
};

export default ArticlePage;
