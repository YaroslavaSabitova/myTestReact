import { afterEach, beforeEach, describe, expect, test } from '@jest/globals';

import { Storage } from '../storage';

// создаем экземпляр хранилища
const storage = new Storage();

// beforeEach принимает на вход функцию, которая запускается перед выполнением каждого теста.
// инициализируем пустое хранилище перед каждым тестом
beforeEach(() => {
  storage.init();
});

// afterEach принимает на вход функцию, которая запускается после выполнения каждого теста.
// очищаем хранилище после каждого теста
afterEach(() => {
  storage.clear();
});

describe('[Storage] Тесты хранилища ключ-значение', () => {
  test('добавление элемента', () => {
    storage.add('0', 'Kevin');

    const storageLength = storage.getStorageLength();
    expect(storageLength).toBe(1);
  });

  test('удаление элемента', () => {
    storage.add('1', 'Jim');
    storage.add('2', 'Pam');

    storage.remove('2');

    const storageLength = storage.getStorageLength();
    expect(storageLength).toBe(1);
  });
});
