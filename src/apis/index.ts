import { API } from './apiClient';
import { PublicHolidayDto } from './type';

export const fetchPublicHolidays = async (year: number, countryCode: string) => {
  const resp = await API.get<PublicHolidayDto[]>(`/v3/PublicHolidays/${year}/${countryCode}`, {
    validateStatus: (status) => [200, 404].includes(status),
  });

  if (resp.status === 404) {
    return null;
  }

  return resp.data;
};
