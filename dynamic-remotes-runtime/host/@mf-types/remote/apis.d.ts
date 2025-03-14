
    export type RemoteKeys = 'remote/Table';
    type PackageType<T> = T extends 'remote/Table' ? typeof import('remote/Table') :any;