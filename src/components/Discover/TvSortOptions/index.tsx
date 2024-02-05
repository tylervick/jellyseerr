import type { SortOptions as TMDBSortOptions } from '@server/api/themoviedb';
import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

const SortOptions: Record<string, TMDBSortOptions> = {
  PopularityAsc: 'popularity.asc',
  PopularityDesc: 'popularity.desc',
  FirstAirDateAsc: 'first_air_date.asc',
  FirstAirDateDesc: 'first_air_date.desc',
  TmdbRatingAsc: 'vote_average.asc',
  TmdbRatingDesc: 'vote_average.desc',
  TitleAsc: 'original_title.asc',
  TitleDesc: 'original_title.desc',
} as const;

const messages = defineMessages({
  sortFirstAirDateAsc: 'First Air Date Ascending',
  sortFirstAirDateDesc: 'First Air Date Descending',
  sortPopularityAsc: 'Popularity Ascending',
  sortPopularityDesc: 'Popularity Descending',
  sortTmdbRatingAsc: 'TMDB Rating Ascending',
  sortTmdbRatingDesc: 'TMDB Rating Descending',
  sortTitleAsc: 'Title (A-Z) Ascending',
  sortTitleDesc: 'Title (Z-A) Descending',
});

const TvSortOptions = () => {
  const intl = useIntl();
  return (
    <>
      <option value={SortOptions.PopularityDesc}>
        {intl.formatMessage(messages.sortPopularityDesc)}
      </option>
      <option value={SortOptions.PopularityAsc}>
        {intl.formatMessage(messages.sortPopularityAsc)}
      </option>
      <option value={SortOptions.FirstAirDateDesc}>
        {intl.formatMessage(messages.sortFirstAirDateDesc)}
      </option>
      <option value={SortOptions.FirstAirDateAsc}>
        {intl.formatMessage(messages.sortFirstAirDateAsc)}
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

export default React.memo(TvSortOptions);
