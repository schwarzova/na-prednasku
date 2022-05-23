import React from 'react';

import { Category, FilterSettings, Location } from '../../types';
import BoolButton from './BoolButton';
import { categoryOptions, locationOptions, months } from './consts';
import SearchInput from './SearchIput';

import Select from './Select';

type Props = {
  filter: FilterSettings;
  onSearchChange: (text: string) => void;
  onFilterChange: (filter: FilterSettings) => void;
  searchText: string;
};

function Filters(props: Props) {
  const currentMonth = new Date().getMonth();

  function handleCategorySelect(option?: string) {
    props.onFilterChange({ ...props.filter, category: option as Category });
  }

  function handleLocationSelect(option?: string) {
    props.onFilterChange({ ...props.filter, location: option as Location });
  }

  function handleMonthSelect(_option?: string, index?: number) {
    props.onFilterChange({ ...props.filter, month: index });
  }

  function handleIsFreeToggle() {
    props.onFilterChange({ ...props.filter, isFree: !props.filter.isFree });
  }

  function handleIsOnlineToggle() {
    props.onFilterChange({ ...props.filter, isOnline: !props.filter.isOnline });
  }

  function handleCategoryToggle(cat: Category) {
    const category =
      props.filter.category && props.filter.category === cat ? undefined : cat;
    props.onFilterChange({ ...props.filter, category });
  }

  function handleLocationToggle(loc: Location) {
    const location =
      props.filter.location && props.filter.location === loc ? undefined : loc;
    props.onFilterChange({ ...props.filter, location });
  }

  function handleCurrentMonthToggle() {
    const month =
      props.filter.month && props.filter.month === currentMonth + 1
        ? undefined
        : currentMonth + 1;
    props.onFilterChange({ ...props.filter, month });
  }

  return (
    <div className="py-10 flex flex-wrap">
      <Select
        placeholder="# Kategorie"
        options={categoryOptions}
        onSelect={handleCategorySelect}
        selectedOption={props.filter.category}
      />
      <Select
        placeholder="🌍 Kde"
        options={locationOptions}
        onSelect={handleLocationSelect}
        selectedOption={props.filter.location}
      />
      <Select
        placeholder="🗓 Kdy"
        options={months}
        onSelect={handleMonthSelect}
        selectedOption={
          props.filter.month ? months[props.filter.month - 1] : undefined
        }
      />
      <BoolButton
        title="💰 Zdarma"
        isSelected={props.filter.isFree}
        onClick={handleIsFreeToggle}
      />
      <BoolButton
        title="🟢 Online"
        isSelected={props.filter.isOnline}
        onClick={handleIsOnlineToggle}
      />
      <BoolButton
        title="# tech"
        isSelected={props.filter.category === 'tech'}
        onClick={() => handleCategoryToggle('tech')}
      />
      <BoolButton
        title="# investice"
        isSelected={props.filter.category === 'investice'}
        onClick={() => handleCategoryToggle('investice')}
      />
      <BoolButton
        title="# krypto"
        isSelected={props.filter.category === 'krypto'}
        onClick={() => handleCategoryToggle('krypto')}
      />
      <BoolButton
        title="🏙 Praha"
        isSelected={props.filter.location === 'Praha'}
        onClick={() => handleLocationToggle('Praha')}
      />
      <BoolButton
        title="🌆 Brno"
        isSelected={props.filter.location === 'Brno'}
        onClick={() => handleLocationToggle('Brno')}
      />
      <BoolButton
        title={months[currentMonth]}
        isSelected={Boolean(
          props.filter.month && props.filter.month - 1 === currentMonth
        )}
        onClick={handleCurrentMonthToggle}
      />
      <SearchInput
        onChange={props.onSearchChange}
        searchText={props.searchText}
      />
    </div>
  );
}

export default Filters;
