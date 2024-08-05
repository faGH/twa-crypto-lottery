export const FormatTimeDelta = (startDate: Date, endDate: Date): string => {
    const deltaMilliseconds: number = Math.abs(endDate.getTime() - startDate.getTime());
    const days: number = Math.floor(deltaMilliseconds / (1000 * 60 * 60 * 24));
    const hours: number = Math.floor((deltaMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes: number = Math.floor((deltaMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds: number = Math.floor((deltaMilliseconds % (1000 * 60)) / 1000);

    return `${days}d:${hours}h:${minutes}m:${seconds}s`;
}

export const GetFirstOfMonth = (year: number, month: number): Date => {
    return new Date(year, month, 1);
}

export const GetFirstOfCurrentMonth = (): Date => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const firstOfCurrentMonth = GetFirstOfMonth(currentYear, currentMonth);

    return firstOfCurrentMonth;
}

export const GetFirstOfNextMonth = (): Date => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    return currentMonth === 11 
        ? GetFirstOfMonth(currentYear + 1, 0)
        : GetFirstOfMonth(currentYear, currentMonth + 1);
}