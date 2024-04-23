import { FC, Suspense } from 'react';
import styled from '@emotion/styled';

import Box from '@Components/layout/Box';
import Loader from '@Components/loader';

import HolidayListItem from './HolidayListItem';
import { HolidayInfo } from './use-search-holidays';

const HolidayListContainer = styled.div<{ isvisible: boolean }>`
  visibility: ${({ isvisible }) => (isvisible ? 'visible' : 'hidden')};
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 72vh;
  overflow: scroll;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`;

const HolidayGroupByYearContainer = styled(Box)`
  gap: 8px;
`;

const EmptyText = styled.p``;

const YearCategroyText = styled.h4``;

const ContentText = styled.div``;

interface HolidayListProps {
  isShowList?: boolean;

  holidayList: HolidayInfo[];
}

const HolidayList: FC<HolidayListProps> = ({ holidayList, isShowList = false }) => (
  <HolidayListContainer isvisible={isShowList}>
    <Suspense fallback={<Loader />}>
      {holidayList?.map((holidayGroup) => (
        <HolidayGroupByYearContainer key={holidayGroup.holidaysYear}>
          <YearCategroyText>
            {holidayGroup.holidaysYear} 공휴일 {`(${holidayGroup.holidays?.length})`}
          </YearCategroyText>
          {holidayGroup.holidays !== undefined && holidayGroup.holidays.length !== 0 ? (
            holidayGroup.holidays.map((holiday) => (
              <HolidayListItem key={`${holiday.date}/ ${holiday.name}`} headerName={`${holiday.date}/ ${holiday.localName}`}>
                <ContentText>{holiday.name}</ContentText>
              </HolidayListItem>
            ))
          ) : (
            <EmptyText>해당 기간 공휴일 검색 결과가 없습니다.</EmptyText>
          )}
        </HolidayGroupByYearContainer>
      ))}
    </Suspense>
  </HolidayListContainer>
);

export default HolidayList;
