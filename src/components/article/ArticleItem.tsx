import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import styles from './ArticleItem.module.scss';
export type ArticleItemProps = {
  title: string;
  image: string;
  date: string;
  href: string;
};

export const ArticleItem: FunctionComponent<ArticleItemProps> = ({
  title,
  image,
  date,
  href,
}) => {
  return (
    <Link href={href} passHref>
      <a className={styles.articleItem} target='_blank'>
        <picture className={styles.image}>
          <Image
            src={image}
            alt={title}
            width={1000}
            height={420}
            className={styles.image}
          />
        </picture>
        <div className={styles.articleItem__content}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.meta}>
            <time dateTime={date}>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </div>
      </a>
    </Link>
  );
};
