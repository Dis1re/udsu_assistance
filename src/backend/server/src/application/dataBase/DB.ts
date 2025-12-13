import { Pool } from 'pg';
import CONFIG from '../../config';
import { IDataBase, IQueryResult } from './IDataBase';

class DB implements IDataBase {
    private pool: Pool;

    constructor() {
        this.pool = new Pool(CONFIG.DB_CONFIG);
    }

    async query<T extends IQueryResult>(sql: string, params: (string | number)[]): Promise<T[]> {
        return (await this.pool.query<T, (string | number)[]>(sql, params)).rows;
    }
}

export default DB;