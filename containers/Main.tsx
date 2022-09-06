import { intersection } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { animateScroll as scroll } from 'react-scroll';

import { defaultFilter } from '../components/Filters/consts';
import Filters from '../components/Filters/Filters';
import Lecture from '../components/Lecture/Lecture';
import NoDataAlert from '../components/NoDataAlert';
import PageTitle from '../components/PageTitle';
import { FilterSettings, Lecture as LectureType } from '../types';
import Newsletter from '../components/Newsletter/Newsletter';

type Props = {
  lectures: LectureType[];
};

function Main(props: Props) {
  const [filteredLectures, setFilteredLectures] = useState<LectureType[]>(
    props.lectures
  );
  const [searchLectures, setSearchLectures] = useState<LectureType[]>(
    props.lectures
  );
  const [filter, setFilter] = useState<FilterSettings>(defaultFilter);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setFilteredLectures(props.lectures);
    setSearchLectures(props.lectures);
  }, [props.lectures]);

  function handleFilterChange(filter: FilterSettings) {
    let filtered = props.lectures;

    if (filter.category) {
      filtered = filtered.filter((l) =>
        l.categories.some((c) => c === filter.category)
      );
    }

    if (filter.location) {
      filtered = filtered.filter((l) => l.location === filter.location);
    }

    if (filter.month) {
      filtered = filtered.filter(
        (l) => Number(l.date.split('-')[1]) === filter.month
      );
    }

    if (filter.isFree) {
      filtered = filtered.filter((l) => !l.price || l.price === 'zdarma');
    }

    if (filter.isOnline) {
      filtered = filtered.filter((l) => l.isOnline);
    }

    setFilteredLectures(filtered);
    setFilter(filter);
  }

  function handleSearch(searchText: string) {
    setSearchText(searchText);
    handleSearchDebounced(searchText);
  }

  const finalLectures = intersection(filteredLectures, searchLectures);

  const handleSearchDebounced = useDebouncedCallback((searchText: string) => {
    if (!searchText) {
      setSearchLectures(props.lectures);
      return;
    }

    const searched = props.lectures.filter((l) => {
      return l.title.toLowerCase().search(searchText.toLowerCase()) !== -1;
    });
    setSearchLectures(searched);
  }, 400);

  return (
    <main className="px-4 pt-5 pb-20 bg-nabifli-black min-h-[calc(100%_-_64px_-_64px)] 2xl:px-20 sm:px-5">
      <PageTitle />
      <Filters
        filter={filter}
        onFilterChange={handleFilterChange}
        onSearchChange={handleSearch}
        searchText={searchText}
      />
      {finalLectures.length === 0 ? (
        <NoDataAlert />
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {finalLectures.map((l, i) => (
            <>
              <Lecture key={l.id} lecture={l} />
              {i === 5 && <Newsletter />}
            </>
          ))}
          <button
            onClick={() => scroll.scrollToTop()}
            className="p-2 fixed bottom-2 right-2 text-indigo-400 text-2xl hover:text-indigo-600"
          >
            &#8963;
          </button>
        </div>
      )}
    </main>
  );
}

export default Main;
