export const formatDate = (dateObject: Date): string => {
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const date = dateObject.getDate();

    return `${year}-${month}-${date}`;
}