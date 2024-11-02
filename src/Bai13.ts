import { createClient } from "redis";
import { Hotel } from "./ex";

const client = createClient({
  url: "redis://127.0.0.1:6379",
});

client.on("error", (err) => console.log("Redis Client Error", err));

async function connectRedis() {
  if (!client.isOpen) {
    await client.connect();
  }
}
function getRoleCurrent() {
  return "admin";
}

function caching( target: Object,  propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = async function (id: number) {
    await connectRedis();
    const cacheKey = `hotel:${id}`;
    const cachedHotel = await client.get(cacheKey);

    if (cachedHotel) {
      console.log(`Cache hit for hotel id ${id}`);
      return JSON.parse(cachedHotel);
    }

    console.log(`Cache miss for hotel id ${id}`);
    const result = await originalMethod.apply(this, [id]);

    if (result) {
      await client.set(cacheKey, JSON.stringify(result), { EX: 3600 });
    }
    return result;
  };
}

function authorize(requiredRole: string) {
  return function (
    target: Object,
    propertyKey: string,
    discriptor: PropertyDescriptor
  ) {
    const originalMethod = discriptor.value;
    discriptor.value = function (...args: any[]) {
      const userRole = getRoleCurrent();
      if (userRole !== requiredRole) {
        console.log('You do not have permission to access this resource');
      } else {
        return originalMethod.apply(this, args);
      }
    };
  };
}
class HotelService {
  @caching
  async getHotelById(id: number): Promise<Hotel | null> {
    return Hotel.findByPk(id);
  }
  @authorize("admin")
  async updateHotel(id: number): Promise<void> {
    console.log(`Update hotel with ID: ${id}`);
  }
}

(async () => {
  await connectRedis();
  const service = new HotelService();
  const hotel = await service.getHotelById(1);
  const hotelCached = await service.getHotelById(1);
  await service.updateHotel(1);
  await client.quit();
})();
