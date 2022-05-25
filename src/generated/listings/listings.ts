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
import type {
  Listing,
  GetListingsParams,
  APIError,
  ListingCreate,
  GetListingsByCategoryParams,
  ListingCategory,
  ArticleShow,
  ListingUpdate,
} from '.././models';
import { customInstance } from '../../orval/custom-instance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * This endpoint allows the client to retrieve a list of listings.

"Listings" are classified ads that users create on DEV.
They can be related to conference announcements, job offers, mentorships,
upcoming events and more.

By default it will return published listings ordered by descending
freshness.

It supports pagination, each page will contain `30` articles by default.

 * @summary Published listings
 */
export const getListings = (params?: GetListingsParams) => {
  return customInstance<Listing[]>({ url: `/listings`, method: 'get', params });
};

export const getGetListingsKey = (params?: GetListingsParams) => [
  `/listings`,
  ...(params ? [params] : []),
];

export type GetListingsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getListings>>
>;
export type GetListingsQueryError = unknown;

export const useGetListings = <TError = unknown>(
  params?: GetListingsParams,
  options?: {
    swr?: SWRConfiguration<Awaited<ReturnType<typeof getListings>>, TError> & {
      swrKey: Key;
    };
  }
) => {
  const { swr: swrOptions } = options ?? {};

  const swrKey = swrOptions?.swrKey ?? (() => getGetListingsKey(params));
  const swrFn = () => getListings(params);

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

/**
 * This endpoint allows the client to create a new listing.

"Listings" are classified ads that users create on DEV.
They can be related to conference announcements, job offers, mentorships,
upcoming events and more.

The user creating the listing or the organization on which behalf the user
is creating for need to have enough credits for this operation to be
successful. The server will prioritize the organization's credits over
the user's credits.

### Additional resources

- [Rails tests for Listings API](https://github.com/forem/forem/blob/main/spec/requests/api/v0/listings_spec.rb)

 * @summary Create a new listing
 */
export const createListing = (listingCreate: ListingCreate) => {
  return customInstance<Listing>({
    url: `/listings`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: listingCreate,
  });
};

/**
 * This endpoint allows the client to retrieve a list of listings belonging
to the specified category.

"Listings" are classified ads that users create on DEV.
They can be related to conference announcements, job offers, mentorships,
upcoming events and more.

By default it will return published listings ordered by descending
freshness.

It supports pagination, each page will contain `30` articles by default.

 * @summary Published listings by category
 */
export const getListingsByCategory = (
  category: ListingCategory,
  params?: GetListingsByCategoryParams
) => {
  return customInstance<Listing[]>({
    url: `/listings/category/${category}`,
    method: 'get',
    params,
  });
};

export const getGetListingsByCategoryKey = (
  category: ListingCategory,
  params?: GetListingsByCategoryParams
) => [`/listings/category/${category}`, ...(params ? [params] : [])];

export type GetListingsByCategoryQueryResult = NonNullable<
  Awaited<ReturnType<typeof getListingsByCategory>>
>;
export type GetListingsByCategoryQueryError = unknown;

export const useGetListingsByCategory = <TError = unknown>(
  category: ListingCategory,
  params?: GetListingsByCategoryParams,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof getListingsByCategory>>,
      TError
    > & { swrKey: Key };
  }
) => {
  const { swr: swrOptions } = options ?? {};

  const isEnable = !!category;
  const swrKey =
    swrOptions?.swrKey ??
    (() => (isEnable ? getGetListingsByCategoryKey(category, params) : null));
  const swrFn = () => getListingsByCategory(category, params);

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

/**
 * This endpoint allows the client to retrieve
a single listing given its `id`.

An unpublished listing is only accessible if authentication is supplied
and it belongs to the authenticated user.

 * @summary A listing
 */
export const getListingById = (id: number) => {
  return customInstance<Listing>({ url: `/listings/${id}`, method: 'get' });
};

export const getGetListingByIdKey = (id: number) => [`/listings/${id}`];

export type GetListingByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getListingById>>
>;
export type GetListingByIdQueryError = APIError;

export const useGetListingById = <TError = APIError>(
  id: number,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof getListingById>>,
      TError
    > & { swrKey: Key };
  }
) => {
  const { swr: swrOptions } = options ?? {};

  const isEnable = !!id;
  const swrKey =
    swrOptions?.swrKey ?? (() => (isEnable ? getGetListingByIdKey(id) : null));
  const swrFn = () => getListingById(id);

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

/**
 * This endpoint allows the client to update an existing listing.

 * @summary Update a listing
 */
export const updateListing = (id: number, listingUpdate: ListingUpdate) => {
  return customInstance<ArticleShow>({
    url: `/listings/${id}`,
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    data: listingUpdate,
  });
};
