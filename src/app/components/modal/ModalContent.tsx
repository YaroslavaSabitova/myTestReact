import { ReactElement, ReactNode } from 'react';

import { ModalFooter } from './ModalFooter';

type TDialogProps = {
  content: ReactNode;
  footer: ReactNode;
};

export function ModalContent({ content, footer }: TDialogProps): ReactElement {
  return (
    <>
      <div className='overlay' />
      <dialog className='dialog'>
        {content}
        <ModalFooter>{footer}</ModalFooter>
      </dialog>
    </>
  );
}
