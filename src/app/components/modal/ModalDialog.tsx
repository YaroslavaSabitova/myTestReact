import { ReactElement } from 'react';

import { ModalContent } from './ModalContent';

type THelloWorldDialogProps = {
  onClose: () => void;
};

export function ModalDialog({ onClose }: THelloWorldDialogProps): ReactElement {
  return (
    <ModalContent
      content={<p>Привет, мир!</p>}
      footer={<button onClick={onClose}>Закрыть</button>}
    />
  );
}
