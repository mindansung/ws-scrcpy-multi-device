/* eslint-disable prettier/prettier */
import { NetInterface } from './NetInterface';
import { BaseDeviceDescriptor } from './BaseDeviceDescriptor';

export default interface GoogDeviceDescriptor extends BaseDeviceDescriptor {
    'ro.build.version.release': string;
    'ro.build.version.sdk': string;
    'ro.product.cpu.abi': string;
    'ro.product.manufacturer': string;
    'ro.product.model': string;
    'wifi.interface': string;
    'ro.boot.carrierid': string;
    'ro.boot.bootloader':string;
    interfaces: NetInterface[];
    pid: number;
    'last.update.timestamp': number;
}
