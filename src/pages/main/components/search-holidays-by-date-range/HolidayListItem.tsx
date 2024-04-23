import { FC, type ButtonHTMLAttributes, PropsWithChildren, useState } from 'react';
import styled from '@emotion/styled';

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const HolidayListItemContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

const HolidayListItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  width: 100%;
  height: 4em;
  border-bottom: 1px solid #e8f0ff;

  &:hover {
    background-color: #ebeff7;
  }

  &:active {
    background-color: #e8f0ff;
  }
`;

const HeaderName = styled.span``;

const HolidayListItemInner = styled.div`
  display: flex;
  width: 100%;
  padding: 6px 16px;
  background-color: #fcf3f2;
`;

interface HolidayListItemProps extends ButtonHTMLAttributes<HTMLDivElement> {
  headerName: string;
}

const HolidayListItem: FC<PropsWithChildren<HolidayListItemProps>> = ({
  headerName,

  children = undefined,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <HolidayListItemContainer onClick={() => setIsOpen(!isOpen)} {...props}>
      <HolidayListItemHeader>
        <HeaderName>{headerName}</HeaderName>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </HolidayListItemHeader>

      <HolidayListItemInner style={{ display: isOpen ? 'flex' : 'none' }}>{children}</HolidayListItemInner>
    </HolidayListItemContainer>
  );
};

export default HolidayListItem;
