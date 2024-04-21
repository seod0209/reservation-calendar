import { FC, useEffect } from 'react';
import styled from '@emotion/styled';
import Calendar from '../../../../components/calendar';
import { fetchPublicHolidays } from '../../../../apis/index';

const SearchHolidaysContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  min-width: 340px;

  border-radius: 16px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const PageTitle = styled.h3``;

const SearchHolidays: FC = () => {
  useEffect(() => {
    fetchPublicHolidays(2024, 'KR')
      .then(() => {
        //  console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <SearchHolidaysContainer>
      <PageTitle>서비스 예약 가능일 확인</PageTitle>
      <Calendar />
    </SearchHolidaysContainer>
  );
};

export default SearchHolidays;
