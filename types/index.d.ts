/**
 * Generate random number
 * @param min - The minimum value in the range
 * @param max - The maximum value in the range
 * @param roundingType - Round the result
 *
 * @category random
 */
export declare function randomNumber(min?: number, max?: number, roundingType?: "round" | "ceil" | "floor"): number;
/**
 * Generate random string
 * @param length - The length of the string to be returned
 *
 * @category random
 */
export declare function randomString(length?: number): string;
/**
 * Generate random boolean
 *
 * @category random
 */
export declare function randomBoolean(): boolean;
/**
 * Shuffle the array and sort it randomly
 *
 * @category random
 */
export declare function shuffle(arr: any[]): any[];
/**
 * Randomly returns a mocked UA
 *
 * @category random
 */
export declare function randomUserAgent(): string;
export declare function capitalize([first, ...rest]: string): string;
/**
 * @description The actual type of the data
 * @category data
 */
export type DataType = "boolean" | "string" | "number" | "bigint" | "symbol" | "null" | "undefined" | "function" | "object" | "array" | "date" | "error" | "set" | "map" | "weakSet" | "weakMap" | "file" | "blob" | "arraybuffer" | "regexp";
export declare function getDataType(target: any): DataType;
export declare function isObject(target: any): boolean;
export declare function hasKey(obj: Record<string, any>, key: string): any;
/**
 * @category device
 */
export declare const isBrowser: boolean;
/**
 * @category device
 */
export declare const isServer: boolean;
/**
 * @category device
 */
export declare const mobileDevicesRegExp: RegExp;
/**
 * @category device
 */
export declare function isMobile(): boolean;
/**
 * @category device
 */
export declare function isDesktop(): boolean;
/**
 * @category device
 */
export declare const isAndroid: boolean;
/**
 * @category device
 */
export declare const isIOS: boolean;
/**
 * @category device
 */
export declare const isUniApp: boolean;
/**
 * @category device
 */
export declare const isWeixin: boolean;
/**
 * @category device
 */
export declare const isQQ: boolean;
/**
 * @category device
 */
export declare const isQQBrowser: boolean;
/**
 * @category device
 */
export declare const isQzone: boolean;
/**
 * @category device
 */
export declare const isWeibo: boolean;
/**
 * @category device
 */
export declare const isBaidu: boolean;
/**
 * @category device
 */
export interface DeviceResizeWatcherOptions {
	immediate: boolean;
}
/**
 * @category device
 */
export declare function watchResize(callback: () => void, { immediate }?: DeviceResizeWatcherOptions): void;
/**
 * Verify the mobile phone number format in mainland China
 *
 * @category regexp
 */
export declare function isMob(phoneNumber: number | string): boolean;
/**
 * Verify email format
 *
 * @category regexp
 */
export declare function isEmail(email: string): boolean;
/**
 * Verify url format
 *
 * @category regexp
 */
export declare function isUrl(url: string): boolean;
/**
 * Verify the ID card number format in mainland China
 *
 * @category regexp
 */
export declare function isIdCard(idCardNumber: string): boolean;
/**
 * Verify the bank card number format in mainland China
 *
 * @category regexp
 */
export declare function isBankCard(bankCardNumber: string): boolean;
/**
 * Verify the IP is IPv4
 *
 * @category regexp
 */
export declare function isIPv4(ip: string): boolean;
/**
 * Verify the IP is IPv6
 *
 * @category regexp
 */
export declare function isIPv6(ip: string): boolean;
/**
 * Current user agent
 *
 * @category network
 */
export declare function getUserAgent(): string;
/**
 * User agents by mock
 *
 * @category network
 */
export declare const userAgents: string[];

export {};
