import { FC, Suspense } from 'react';
import styled from '@emotion/styled';

import Calendar from '../../../../components/calendar';
import Box from '../../../../components/layout/Box';
import Loader from '../../../../components/loader';

import { useSearchHolidays } from './use-search-holidays';
import HolidayListItem from './HolidayListItem';

const SearchHolidaysByhDateRangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const SearchDateRangeContainer = styled(Box)`
  gap: 20px;
  min-width: 340px;
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const HolidayListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const HolidayGroupByYearContainer = styled(Box)``;

const PageTitle = styled.h3``;

const EmptyText = styled.p``;

const YearCategroyText = styled.h4``;

const ContentText = styled.div``;

const SearchHolidaysByhDateRange: FC = () => {
  const { holidayList, hoidaysCount, isloading, handleSearchHolidays } = useSearchHolidays();

  if (isloading) {
    return <Loader />;
  }

  return (
    <SearchHolidaysByhDateRangeContainer>
      <SearchDateRangeContainer>
        <PageTitle>서비스 예약 가능일 확인</PageTitle>
        {hoidaysCount}
        <Calendar searchDateRange={handleSearchHolidays} />
      </SearchDateRangeContainer>
      <HolidayListContainer>
        <Suspense fallback={<div>...loading</div>}>
          {holidayList.length !== 0 ? (
            holidayList.map((holidayGroup) => (
              <HolidayGroupByYearContainer key={holidayGroup.holidaysYear}>
                <YearCategroyText>
                  {holidayGroup.holidaysYear} 공휴일 {`(${holidayGroup.holidays?.length})`}
                </YearCategroyText>
                {holidayGroup.holidays !== undefined && holidayGroup.holidays.length !== 0 ? (
                  holidayGroup.holidays.map((holiday) => (
                    <HolidayListItem
                      key={`${holiday.date}/ ${holiday.name}`}
                      headerName={`${holiday.date}/ ${holiday.localName}`}
                    >
                      <ContentText>{holiday.name}</ContentText>
                    </HolidayListItem>
                  ))
                ) : (
                  <EmptyText>해당 기간 공휴일 검색 결과가 없습니다.</EmptyText>
                )}
              </HolidayGroupByYearContainer>
            ))
          ) : (
            <EmptyText>검색 결과가 없습니다.</EmptyText>
          )}
        </Suspense>
      </HolidayListContainer>
    </SearchHolidaysByhDateRangeContainer>
  );
};

export default SearchHolidaysByhDateRange;
