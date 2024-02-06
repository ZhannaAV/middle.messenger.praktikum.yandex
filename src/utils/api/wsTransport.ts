import { store } from '../../store/store';
import { EventBus } from '../eventBus';
import { IMessage } from '../../store/model';

enum WSTransportEvents {
  Error = 'Error',
  Connected = 'Connected',
  Close = 'Close',
  Message = 'Message',
}

export class WSTransport extends EventBus {
  private url: string = '';

  private socket?: WebSocket;

  private pingInterval: ReturnType<typeof setInterval> | undefined;

  private readonly pingIntervalTime = 30000;

  public send(data: {content?: string, type: string}) {
    if (!this.socket) throw new Error('This socket is not connected');
    this.socket.send(JSON.stringify(data));
  }

  private save(messages: unknown) {
    store.setMessages(messages as IMessage | IMessage[]);
  }

  public connect() {
    this.url = `wss://ya-praktikum.tech/ws/chats/${store.getUser().id}/${store.getActiveChatId()}/${store.getToken()}`;

    this.close()
      .then(() => {
        this.socket = new WebSocket(this.url);
        this.subscribe(this.socket);
        this.setupPing();
      });

    return new Promise((resolve, reject) => {
      this.on(WSTransportEvents.Error, reject);
      this.on(WSTransportEvents.Connected, (res) => {
        this.off(WSTransportEvents.Error, reject);
        resolve(res);
      });
      this.on(WSTransportEvents.Message, this.save);
    });
  }

  public getOld() {
    this.send({
      type: 'get old',
      content: '0'
    });
  }

  public close() {
    return new Promise((resolve) => {
      if (this.socket) {
        this.socket?.close();
        this.on(WSTransportEvents.Close, (res) => {
          clearInterval(this.pingInterval);
          this.socket = undefined;
          this.off(WSTransportEvents.Message, this.save);
          resolve(res);
        });
      } else resolve('');
    });
  }

  private setupPing() {
    this.pingInterval = setInterval(() => {
      this.send({ type: 'ping' });
    }, this.pingIntervalTime);
  }

  private subscribe(socket: WebSocket) {
    socket.addEventListener('open', () => {
      this.emit(WSTransportEvents.Connected);
    });

    socket.addEventListener('close', () => {
      this.emit(WSTransportEvents.Close);
    });

    socket.addEventListener('error', () => {
      this.emit(WSTransportEvents.Error);
    });

    socket.addEventListener('message', (message) => {
      try {
        const data = JSON.parse(message.data);
        if (['pong', 'user connected'].includes(data?.type)) {
          return;
        }
        this.emit(WSTransportEvents.Message, data);
      } catch (e) {
        console.log(e);
      }
    });
  }
}

export const wsTransport = new WSTransport();
