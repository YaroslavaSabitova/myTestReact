import { useState } from 'react';
import { createPortal } from 'react-dom';

import { Modal } from './Modal';

export type DetailsButtonProps = {
  text: string;
};

export const DetailsButton = ({ text }: DetailsButtonProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  // Находим нужный DOM-элемент (он уже отрендерен в Portal)
  const targetNode = document.getElementById('react-id');

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Подробнее</button>

      {showModal &&
        targetNode &&
        // createPortal(компонент_или_jsx, dom_узел_куда_вставить)
        createPortal(
          <Modal onClose={() => setShowModal(false)} text={text} />,
          targetNode
        )}
    </div>
  );
};
