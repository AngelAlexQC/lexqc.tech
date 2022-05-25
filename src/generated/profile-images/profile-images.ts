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
import type { ProfileImage, APIError } from '.././models';
import { customInstance } from '../../orval/custom-instance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * This endpoint allows the client to retrieve a user or organization
profile image information by its corresponding username

 * @summary User or organization profile picture
 */
export const getProfileImage = (username: string) => {
  return customInstance<ProfileImage>({
    url: `/profile_images/${username}`,
    method: 'get',
  });
};

export const getGetProfileImageKey = (username: string) => [
  `/profile_images/${username}`,
];

export type GetProfileImageQueryResult = NonNullable<
  Awaited<ReturnType<typeof getProfileImage>>
>;
export type GetProfileImageQueryError = APIError;

export const useGetProfileImage = <TError = APIError>(
  username: string,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof getProfileImage>>,
      TError
    > & { swrKey: Key };
  }
) => {
  const { swr: swrOptions } = options ?? {};

  const isEnable = !!username;
  const swrKey =
    swrOptions?.swrKey ??
    (() => (isEnable ? getGetProfileImageKey(username) : null));
  const swrFn = () => getProfileImage(username);

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