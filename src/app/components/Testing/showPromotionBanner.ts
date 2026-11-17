// функция принимает строку и отображает ее через 15 секунд в окне уведомления в браузере

export function showPromotionBanner(text: string): void {
  setTimeout(() => alert(text), 15000);
}
