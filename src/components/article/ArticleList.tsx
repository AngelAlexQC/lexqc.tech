import { FunctionComponent } from 'react';
import { ArticleIndex } from 'src/generated/models';
import { ArticleItem } from './ArticleItem';
import styles from './ArticleList.module.scss';
export const ArticleList: FunctionComponent<{ articles: ArticleIndex[] }> = ({
  articles,
}) => {
  return (
    <>
      {articles && (
        <div className={styles.articleList}>
          <h3 className={styles.sectionTitle}>Últimos artículos</h3>
          {articles.map((article) => (
            <ArticleItem
              href={article.url}
              date={article.created_at}
              image={article.cover_image || '/logo.png'}
              title={article.title}
              key={article.slug}
            />
          ))}
        </div>
      )}
    </>
  );
};
