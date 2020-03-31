import { table, primaryKey } from '../luna';
import { Model, FindOptions } from '../db';

export class Entity {}


// 员工
@table('members')
export class Member extends Model {
    
    @primaryKey
    id?: number = undefined;
    
    name?: string = undefined;
    
    avatar?: string = undefined;
    
    status?: number = undefined;
    
    createdAt?: number = undefined;

    static async findOne(id: number | string): Promise<Member | undefined>;
    static async findOne(options: FindOptions): Promise<Member | undefined>;
    static async findOne(p1: any) {
        return Model._findOne(Member, p1);
    }
    static async findAll(idArr: Array<number | string>): Promise<Member[]>;
    static async findAll(options: FindOptions): Promise<Member[]>;
    static async findAll(p1: any) {
        return Model._findAll(Member, p1);
    }
    static async fetch(sql: string, params?: any[]): Promise<Member | undefined> {
        return Model._fetch(Member, sql, params);
    }
    static async fetchAll(sql: string, params?: any[]): Promise<Member[]> {
        return Model._fetchAll(Member, sql, params);
    }
    static async insert(info: Member): Promise<Member> {
        return Model._insert(info);
    }
    static async update(id: number | string, info: Member): Promise<number>;
    static async update(options: FindOptions, info: Member): Promise<number>;
    static async update(p1: any, info: Member): Promise<number> {
        return Model._update(p1, info);
    }
    static async delete(id: number | string, info: Member): Promise<number>;
    static async delete(options: FindOptions, info: Member): Promise<number>;
    static async delete(p1: any, info: Member): Promise<number> {
        return Model._delete(p1, info);
    }
    static async exec(sql: string, params?: any[]): Promise<number> {
        return Model._exec(sql, params);
    }
}