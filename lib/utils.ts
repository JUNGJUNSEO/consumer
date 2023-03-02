import { formatDistanceToNow, format } from 'date-fns'
import koLocale from 'date-fns/locale/ko';

const MINUTE_IN_MS = 1000 * 60;
const HOUR_IN_MS = MINUTE_IN_MS * 60;
const DAY_IN_MS = HOUR_IN_MS * 24;
const WEEK_IN_MS = DAY_IN_MS * 7;

export const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    const now = Date.now();
    const diffInMs = now - date.getTime();
    
    // 5분 전
    if (diffInMs < 5 * MINUTE_IN_MS) {
      return '방금 전';
    }

    if (diffInMs < HOUR_IN_MS) {
      const minutes = Math.floor(diffInMs / MINUTE_IN_MS);
      return `${minutes}분 전`;
    }

    if (diffInMs < DAY_IN_MS) {
      const hours = Math.floor(diffInMs / HOUR_IN_MS);
      return `${hours}시간 전`;
    }

    // 7일 전
    if (diffInMs < WEEK_IN_MS) {
      return formatDistanceToNow(date, { addSuffix: true, locale: koLocale });
    }

    return format(date, 'yyyy년 M월 d일');
  };