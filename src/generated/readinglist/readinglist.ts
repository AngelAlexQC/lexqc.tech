/**
 * Generated by orval v6.8.1 🍺
 * Do not edit manually.
 * DEV API (beta)
 * 
Access Forem articles, users and other resources via API.

For a real-world example of Forem in action, check out [DEV](https://www.dev.to).

All endpoints that don't require authentication are CORS enabled.

All requests must send a user-agent header.

Dates and date times, unless otherwise specified, must be in
the [RFC 3339](https://tools.ietf.org/html/rfc3339) format.

 * OpenAPI spec version: 0.9.7
 */
import useSwr, { SWRConfiguration, Key } from 'swr';
import type { ReadingList, APIError, GetReadinglistParams } from '.././models';
import { customInstance } from '../../orval/custom-instance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * This endpoint allows the client to retrieve a list of readinglist reactions along with the related article for the authenticated user.

Reading list will be in reverse chronological order base
on the creation of the reaction.

It will return paginated reading list items along with the articles
they refer to. By default a page will contain `30` items

 * @summary User's reading list
 */
export const getReadinglist = (params?: GetReadinglistParams) => {
  return customInstance<ReadingList[]>({
    url: `/readinglist`,
    method: 'get',
    params,
  });
};

export const getGetReadinglistKey = (params?: GetReadinglistParams) => [
  `/readinglist`,
  ...(params ? [params] : []),
];

export type GetReadinglistQueryResult = NonNullable<
  Awaited<ReturnType<typeof getReadinglist>>
>;
export type GetReadinglistQueryError = APIError;

export const useGetReadinglist = <TError = APIError>(
  params?: GetReadinglistParams,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof getReadinglist>>,
      TError
    > & { swrKey: Key };
  }
) => {
  const { swr: swrOptions } = options ?? {};

  const swrKey = swrOptions?.swrKey ?? (() => getGetReadinglistKey(params));
  const swrFn = () => getReadinglist(params);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
    swrKey,
    swrFn,
    swrOptions
  );

  return {
    swrKey,
    ...query,
  };
};
