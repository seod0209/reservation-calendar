import { FC, useState } from 'react';
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
  const { holidayList, holidaysCount, start, end, handleSearchHolidays } = useSearchHolidays();
  const [isShowList, setIsShowList] = useState<boolean>(false);

  return (
    <SearchHolidaysByDateRangeContainer>
      <SearchDateRangeContainer>
        <PageTitle>서비스 예약 가능일 확인</PageTitle>
        <CalendarAndHolidayTotalCount
          start={start}
          end={end}
          holidaysCount={holidaysCount}
          setIsShowList={() => setIsShowList(true)}
          handleSearchHolidays={handleSearchHolidays}
        />
      </SearchDateRangeContainer>
      <HolidayList holidayList={holidayList} isShowList={isShowList} />
    </SearchHolidaysByDateRangeContainer>
  );
};

export default SearchHolidaysByhDateRange;
