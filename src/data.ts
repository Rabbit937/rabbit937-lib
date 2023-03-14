/**
 * @description The actual type of the data 
 * @category data
 */

export type DataType = | "boolean" | 'string' | 'number' | 'bigint' | 'symbol' | 'null' | 'undefined' | 'function' | 'object' | 'array' | 'date' | 'error' | 'set' | 'map' | 'weakSet' | 'weakMap' | 'file' | 'blob' | 'arraybuffer' | 'regexp'


export function getDataType(target: any) {
    return Object.prototype.toString.call(target).slice(8, -1).toLowerCase() as DataType;
}


export function isObject(target: any) {
    return getDataType(target) === "object";
}

export function hasKey(obj: Record<string, any>, key: string) {
    if (!isObject(obj)) return false;
    return Object.prototype.hasOwnProperty.call(obj, key);
}