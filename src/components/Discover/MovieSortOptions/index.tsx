import type { SortOptions as TMDBSortOptions } from '@server/api/themoviedb';
import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

const SortOptions: Record<string, TMDBSortOptions> = {
  PopularityAsc: 'popularity.asc',
  PopularityDesc: 'popularity.desc',
  ReleaseDateAsc: 'release_date.asc',
  ReleaseDateDesc: 'release_date.desc',
  TmdbRatingAsc: 'vote_average.asc',
  TmdbRatingDesc: 'vote_average.desc',
  TitleAsc: 'original_title.asc',
  TitleDesc: 'original_title.desc',
} as const;

const messages = defineMessages({
  sortPopularityAsc: 'Popularity Ascending',
  sortPopularityDesc: 'Popularity Descending',
  sortReleaseDateAsc: 'Release Date Ascending',
  sortReleaseDateDesc: 'Release Date Descending',
  sortTmdbRatingAsc: 'TMDB Rating Ascending',
  sortTmdbRatingDesc: 'TMDB Rating Descending',
  sortTitleAsc: 'Title (A-Z) Ascending',
  sortTitleDesc: 'Title (Z-A) Descending',
});

const MovieSortOptions = () => {
  const intl = useIntl();
  return (
    <>
      <option value={SortOptions.PopularityDesc}>
        {intl.formatMessage(messages.sortPopularityDesc)}
      </option>
      <option value={SortOptions.PopularityAsc}>
        {intl.formatMessage(messages.sortPopularityAsc)}
      </option>
      <option value={SortOptions.ReleaseDateDesc}>
        {intl.formatMessage(messages.sortReleaseDateDesc)}
      </option>
      <option value={SortOptions.ReleaseDateAsc}>
        {intl.formatMessage(messages.sortReleaseDateAsc)}
      </option>
      <option value={SortOptions.TmdbRatingDesc}>
        {intl.formatMessage(messages.sortTmdbRatingDesc)}
      </option>
      <option value={SortOptions.TmdbRatingAsc}>
        {intl.formatMessage(messages.sortTmdbRatingAsc)}
      </option>
      <option value={SortOptions.TitleAsc}>
        {intl.formatMessage(messages.sortTitleAsc)}
      </option>
      <option value={SortOptions.TitleDesc}>
        {intl.formatMessage(messages.sortTitleDesc)}
      </option>
    </>
  );
};

export default React.memo(MovieSortOptions);
