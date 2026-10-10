import { useState } from 'react';

import { ModalDialog } from './ModalDialog';

export function BtnModalOpen() {
  const [open, setOpen] = useState(false);

  function toggleDialog() {
    setOpen(!open);
  }

  if (!open) {
    return (
      <div className='modal-card'>
        <button onClick={toggleDialog}>Открыть модальное окно</button>
      </div>
    );
  }

  return <ModalDialog onClose={toggleDialog} />;
}
