/**
 * 유효한 날짜인지 검사
 * ex) 2024/02/30 => false
 */
export function checkValidDate(value: string) {
  let result = true;
  try {
    const date = value.split('/');
    const y = parseInt(date[0], 10);
    const m = parseInt(date[1], 10);
    const d = parseInt(date[2], 10);

    const dateRegex =
      /^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-./])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/;
    result = dateRegex.test(`${d}-${m}-${y}`);
  } catch (err) {
    result = false;
  }
  return result;
}
