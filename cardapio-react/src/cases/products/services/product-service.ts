import type { Product } from '../dtos/Product';
import { Api } from '../../../lib/axios';
const ENDPOINT = '/Products?key=f35cac90';

export const ProductService = {
    async listAll(): Promise<Product[]> {
        const result = await Api.get<Product[]>(ENDPOINT);
        return result.data;
    }
}