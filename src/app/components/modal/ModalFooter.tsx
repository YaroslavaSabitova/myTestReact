import { ReactElement, ReactNode } from 'react';

type TDialogFooterProps = {
  children: ReactNode;
};

export function ModalFooter({ children }: TDialogFooterProps): ReactElement {
  return <form method='dialog'>{children}</form>;
}
