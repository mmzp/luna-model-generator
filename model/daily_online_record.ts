import { table, primaryKey } from '../luna';
import { Model, FindOptions } from '../db';

export class Entity {}


// 签到设备每日在线记录
@table('daily_online_records')
export class DailyOnlineRecord extends Model {
    
    @primaryKey
    id?: number = undefined;
    
    day?: string = undefined;
    
    memberId?: number = undefined;
    
    lastActiveTime?: number = undefined;
    
    onlineTime?: number = undefined;
    
    offlineTime?: number = undefined;
    
    duration?: number = undefined;
    
    fixedDuration?: number = undefined;
    
    createdAt?: number = undefined;

    static async findOne(id: number | string): Promise<DailyOnlineRecord | undefined>;
    static async findOne(options: FindOptions): Promise<DailyOnlineRecord | undefined>;
    static async findOne(p1: any) {
        return Model._findOne(DailyOnlineRecord, p1);
    }
    static async findAll(idArr: Array<number | string>): Promise<DailyOnlineRecord[]>;
    static async findAll(options: FindOptions): Promise<DailyOnlineRecord[]>;
    static async findAll(p1: any) {
        return Model._findAll(DailyOnlineRecord, p1);
    }
    static async fetch(sql: string, params?: any[]): Promise<DailyOnlineRecord | undefined> {
        return Model._fetch(DailyOnlineRecord, sql, params);
    }
    static async fetchAll(sql: string, params?: any[]): Promise<DailyOnlineRecord[]> {
        return Model._fetchAll(DailyOnlineRecord, sql, params);
    }
    static async insert(info: DailyOnlineRecord): Promise<DailyOnlineRecord> {
        return Model._insert(info);
    }
    static async update(id: number | string, info: DailyOnlineRecord): Promise<number>;
    static async update(options: FindOptions, info: DailyOnlineRecord): Promise<number>;
    static async update(p1: any, info: DailyOnlineRecord): Promise<number> {
        return Model._update(p1, info);
    }
    static async delete(id: number | string, info: DailyOnlineRecord): Promise<number>;
    static async delete(options: FindOptions, info: DailyOnlineRecord): Promise<number>;
    static async delete(p1: any, info: DailyOnlineRecord): Promise<number> {
        return Model._delete(p1, info);
    }
    static async exec(sql: string, params?: any[]): Promise<number> {
        return Model._exec(sql, params);
    }
}