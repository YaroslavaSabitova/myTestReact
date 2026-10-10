// Кастомный хук — это функция, имя которой начинается с use и которая внутри вызывает другие хуки React (useState, useEffect, useCallback, ...)
// Задача - вынести переиспользуемую логику из компонента (открыть/закрыть текст), чтобы другие компоненты могли использовать этот же хук.

import { useCallback, useEffect, useState } from 'react';

// Параметры
type TUseDisclosureCallbacks = {
  onOpen?: () => void;
  onClose?: () => void;
};

// Возвращает
type TUseDisclosureResult = {
  // состояние
  isOpen: boolean;

  // Колбеки: onOpen при открытии, onClose при закрытии.
  // Не принимают аргументов, ничего не возвращают.
  toggle: () => void;
  open: () => void;
  close: () => void;
};

export const useDisclosure = (
  // начальное состояние
  initialState = false,
  { onOpen, onClose }: TUseDisclosureCallbacks = {}
): TUseDisclosureResult => {
  const [isOpen, setIsOpen] = useState(initialState);

  // Синхронизация: если initialState меняется снаружи — обновляем состояние
  useEffect(() => {
    setIsOpen(initialState);
  }, [initialState]);

  const open = useCallback((): void => {
    if (!isOpen) {
      setIsOpen(true);
      onOpen?.();
    }
  }, [isOpen, onOpen]);

  const close = useCallback((): void => {
    if (isOpen) {
      setIsOpen(false);
      onClose?.();
    }
  }, [isOpen, onClose]);

  const toggle = useCallback((): void => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }, [isOpen, open, close]);

  return { isOpen, toggle, open, close };
};
