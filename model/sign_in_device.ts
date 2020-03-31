import { table, primaryKey } from '../luna';
import { Model, FindOptions } from '../db';

export class Entity {}


// 签到设备，每个员工最多登记一个签到设备即可
@table('sign_in_devices')
export class SignInDevice extends Model {
    
    @primaryKey
    id?: number = undefined;
    
    memberId?: number = undefined;
    
    name?: string = undefined;
    
    mac?: string = undefined;
    
    createdAt?: number = undefined;

    static async findOne(id: number | string): Promise<SignInDevice | undefined>;
    static async findOne(options: FindOptions): Promise<SignInDevice | undefined>;
    static async findOne(p1: any) {
        return Model._findOne(SignInDevice, p1);
    }
    static async findAll(idArr: Array<number | string>): Promise<SignInDevice[]>;
    static async findAll(options: FindOptions): Promise<SignInDevice[]>;
    static async findAll(p1: any) {
        return Model._findAll(SignInDevice, p1);
    }
    static async fetch(sql: string, params?: any[]): Promise<SignInDevice | undefined> {
        return Model._fetch(SignInDevice, sql, params);
    }
    static async fetchAll(sql: string, params?: any[]): Promise<SignInDevice[]> {
        return Model._fetchAll(SignInDevice, sql, params);
    }
    static async insert(info: SignInDevice): Promise<SignInDevice> {
        return Model._insert(info);
    }
    static async update(id: number | string, info: SignInDevice): Promise<number>;
    static async update(options: FindOptions, info: SignInDevice): Promise<number>;
    static async update(p1: any, info: SignInDevice): Promise<number> {
        return Model._update(p1, info);
    }
    static async delete(id: number | string, info: SignInDevice): Promise<number>;
    static async delete(options: FindOptions, info: SignInDevice): Promise<number>;
    static async delete(p1: any, info: SignInDevice): Promise<number> {
        return Model._delete(p1, info);
    }
    static async exec(sql: string, params?: any[]): Promise<number> {
        return Model._exec(sql, params);
    }
}