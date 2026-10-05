//  компонент, отображающий модальное окно. Мы хотим, чтобы была возможность закрывать это окно по нажатию на клавишу Esc . Чтобы реализовать такую функциональность, необходимо подписаться на событие нажатия на клавишу Esc при монтировании компонента, а при размонтировании компонента мы должны отписаться от этого события
import { useEffect } from 'react';

type TModalProps = {
  onClose: () => void;
};

export function Modal({ onClose }: TModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      e.key === 'Escape' && onClose();
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);
}
