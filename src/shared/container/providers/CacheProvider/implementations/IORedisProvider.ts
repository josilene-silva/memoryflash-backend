import { redisConfig } from "@shared/config/redis";
import Redis from "ioredis";
import { ICacheProvider } from "../ICacheProvider";

const ONE_HOUR = 3600;

export class IORedisProvider implements ICacheProvider {
  private redisClient: Redis;

  constructor() {
    const { host, port, password } = redisConfig;
    this.redisClient = new Redis({
      password,
      host,
      port,
    });
  }

  async get(key: string): Promise<string> {
    const redisGet = await this.redisClient.get(key);
    return redisGet;
  }

  async set(
    key: string,
    value: string,
    expirationInSeconds = ONE_HOUR
  ): Promise<void> {
    await this.redisClient.set(key, value, "EX", expirationInSeconds);
  }

  async del(key: string): Promise<void> {
    await this.redisClient.del(key);
  }
}
