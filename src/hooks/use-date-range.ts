import { useState } from 'react';
import { getDaysInMonth } from 'date-fns';

export function useDateRange() {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
}
