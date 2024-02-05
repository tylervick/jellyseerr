import Button from '@app/components/Common/Button';
import Header from '@app/components/Common/Header';
import ListView from '@app/components/Common/ListView';
import PageTitle from '@app/components/Common/PageTitle';
import type { FilterOptions } from '@app/components/Discover/constants';
import {
  countActiveFilters,
  prepareFilterValues,
} from '@app/components/Discover/constants';
import FilterSlideover from '@app/components/Discover/FilterSlideover';
import TvSortOptions from '@app/components/Discover/TvSortOptions';
import useDiscover from '@app/hooks/useDiscover';
import { useUpdateQueryParams } from '@app/hooks/useUpdateQueryParams';
import Error from '@app/pages/_error';
import { BarsArrowDownIcon, FunnelIcon } from '@heroicons/react/24/solid';
import type { TvResult } from '@server/models/Search';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  discovertv: 'Series',
  activefilters:
    '{count, plural, one {# Active Filter} other {# Active Filters}}',
});

const DiscoverTv = () => {
  const intl = useIntl();
  const router = useRouter();
  const [showFilters, setShowFilters] = useState(false);
  const preparedFilters = prepareFilterValues(router.query);
  const updateQueryParams = useUpdateQueryParams({});

  const {
    isLoadingInitialData,
    isEmpty,
    isLoadingMore,
    isReachingEnd,
    titles,
    fetchMore,
    error,
  } = useDiscover<TvResult, never, FilterOptions>('/api/v1/discover/tv', {
    ...preparedFilters,
  });

  if (error) {
    return <Error statusCode={500} />;
  }

  const title = intl.formatMessage(messages.discovertv);

  return (
    <>
      <PageTitle title={title} />
      <div className="mb-4 flex flex-col justify-between lg:flex-row lg:items-end">
        <Header>{title}</Header>
        <div className="mt-2 flex flex-grow flex-col sm:flex-row lg:flex-grow-0">
          <div className="mb-2 flex flex-grow sm:mb-0 sm:mr-2 lg:flex-grow-0">
            <span className="inline-flex cursor-default items-center rounded-l-md border border-r-0 border-gray-500 bg-gray-800 px-3 text-gray-100 sm:text-sm">
              <BarsArrowDownIcon className="h-6 w-6" />
            </span>
            <select
              id="sortBy"
              name="sortBy"
              className="rounded-r-only"
              value={preparedFilters.sortBy}
              onChange={(e) => updateQueryParams('sortBy', e.target.value)}
            >
              <TvSortOptions />
            </select>
          </div>
          <FilterSlideover
            type="tv"
            currentFilters={preparedFilters}
            onClose={() => setShowFilters(false)}
            show={showFilters}
          />
          <div className="mb-2 flex flex-grow sm:mb-0 lg:flex-grow-0">
            <Button onClick={() => setShowFilters(true)} className="w-full">
              <FunnelIcon />
              <span>
                {intl.formatMessage(messages.activefilters, {
                  count: countActiveFilters(preparedFilters),
                })}
              </span>
            </Button>
          </div>
        </div>
      </div>
      <ListView
        items={titles}
        isEmpty={isEmpty}
        isReachingEnd={isReachingEnd}
        isLoading={
          isLoadingInitialData || (isLoadingMore && (titles?.length ?? 0) > 0)
        }
        onScrollBottom={fetchMore}
      />
    </>
  );
};

export default DiscoverTv;
