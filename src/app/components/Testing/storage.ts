export class Storage {
  private kvStorage: Record<string, string> | null = null;

  // инициализация хранилища
  public init(): void {
    this.kvStorage = {};
  }

  // очищение хранилища
  public clear() {
    this.kvStorage = null;
  }

  // добавление элемента
  public add(key: string, value: string): void {
    if (this.kvStorage !== null) {
      this.kvStorage[key] = value;
    }
  }

  // удаление элемента
  public remove(key: string): void {
    if (this.kvStorage !== null) {
      delete this.kvStorage[key];
    }
  }

  // получаем количество элементов в хранилище
  public getStorageLength(): number | null {
    if (this.kvStorage !== null) {
      return Object.keys(this.kvStorage).length;
    }
    return null;
  }
}
