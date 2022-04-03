export interface ICacheProvider {
  get(key: string): Promise<string>;
  set(key: string, value: string, expiration?: number): Promise<void>;
  del(key: string): Promise<void>;
}
