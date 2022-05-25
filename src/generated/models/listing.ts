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
import type { ListingCategory } from './listingCategory';
import type { SharedUser } from './sharedUser';
import type { SharedOrganization } from './sharedOrganization';

export interface Listing {
  type_of: string;
  id: number;
  title: string;
  slug: string;
  body_markdown: string;
  tag_list: string;
  tags: string[];
  category: ListingCategory;
  processed_html: string;
  published: boolean;
  user: SharedUser;
  organization?: SharedOrganization;
}
