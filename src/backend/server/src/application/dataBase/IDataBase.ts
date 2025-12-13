export interface IQueryResult {
    [column: string]: any;
}

export interface IDataBase {
    query: <T extends IQueryResult>(sql: string, params: (string | number)[]) => Promise<T[]>;
}