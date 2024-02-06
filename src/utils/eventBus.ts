export class EventBus {
  private listeners: Record<string, Array<(data: unknown) => void>> = {};

  on(event: string, callback: (data: unknown) => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: (data: unknown) => void) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter((listener) => listener !== callback);
  }

  emit(event: string, data: unknown = null) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener) => listener(data));
  }
}
