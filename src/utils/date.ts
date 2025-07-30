export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;

  now.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);


  if (date.getTime() === now.getTime()) {
    return `Hoje às ${timeString}`;
  } else if (date.getTime() === yesterday.getTime()) {
    return `Ontem às ${timeString}`;
  } else {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year} às ${timeString}`;
  }
}
