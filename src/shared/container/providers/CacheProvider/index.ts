import { container } from "tsyringe";

import { ICacheProvider } from "./ICacheProvider";
import { IORedisProvider } from "./implementations/IORedisProvider";

container.registerSingleton<ICacheProvider>("CacheProvider", IORedisProvider);
