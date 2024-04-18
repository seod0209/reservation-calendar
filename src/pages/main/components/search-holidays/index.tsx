import { FC, useEffect } from 'react';
import styled from '@emotion/styled';
import { fetchPublicHolidays } from '../../../../apis/index';

const SearchHolidaysContainer = styled.div`
  padding: 20px;
  width: 100%;
  border-radius: 16px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PageTitle = styled.h3``;

const SearchHolidays: FC = () => {
  useEffect(() => {
    fetchPublicHolidays(2024, 'KR')
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <SearchHolidaysContainer>
      <PageTitle>서비스 예약 가능일 확인</PageTitle>
    </SearchHolidaysContainer>
  );
};

export default SearchHolidays;
