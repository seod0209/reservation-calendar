export interface PublicHolidayDto {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties: null;
  launchYear: number;
  types: HolidayTypes[];
}

export type HolidayTypes = 'Public' | 'Bank' | 'School' | 'Authorities' | 'Optional' | 'Observance';
