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
import type { SharedUser } from './sharedUser';
import type { SharedOrganization } from './sharedOrganization';
import type { ArticleFlareTag } from './articleFlareTag';

export interface ArticleMe {
  type_of: string;
  id: number;
  title: string;
  description: string;
  cover_image: string | null;
  published: boolean;
  published_at: string;
  tag_list: string[];
  slug: string;
  path: string;
  url: string;
  canonical_url: string;
  comments_count: number;
  positive_reactions_count: number;
  public_reactions_count: number;
  page_views_count: number;
  /** Crossposting or published date time */
  published_timestamp: string;
  /** The body of the article in Markdown format */
  body_markdown: string;
  user: SharedUser;
  /** Reading time, in minutes */
  reading_time_minutes: number;
  organization?: SharedOrganization;
  flare_tag?: ArticleFlareTag;
}
