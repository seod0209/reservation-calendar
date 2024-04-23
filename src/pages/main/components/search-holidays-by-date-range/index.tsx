import { FC } from 'react';
import styled from '@emotion/styled';

import Box from '../../../../components/layout/Box';

import { useSearchHolidays } from './use-search-holidays';

import CalendarAndHolidayTotalCount from './CalendarAndHolidayTotalCount';
import HolidayList from './HolidayList';

const SearchHolidaysByDateRangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  min-width: 340px;
`;

const SearchDateRangeContainer = styled(Box)`
  gap: 20px;
  width: 100%;
`;

const PageTitle = styled.h3``;

const SearchHolidaysByhDateRange: FC = () => {
  const { holidayList, holidaysCount, isloading, start, end, handleSearchHolidays } = useSearchHolidays();

  return (
    <SearchHolidaysByDateRangeContainer>
      <SearchDateRangeContainer>
        <PageTitle>서비스 예약 가능일 확인</PageTitle>
        <CalendarAndHolidayTotalCount
          start={start}
          end={end}
          holidaysCount={holidaysCount}
          handleSearchHolidays={handleSearchHolidays}
        />
      </SearchDateRangeContainer>
      <HolidayList holidayList={holidayList} isLoading={isloading} />
    </SearchHolidaysByDateRangeContainer>
  );
};

export default SearchHolidaysByhDateRange;
