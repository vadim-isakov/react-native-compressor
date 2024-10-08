import Video from './Video';
import type { VideoCompressorType } from './Video';
import Audio from './Audio';
import Image from './Image';
import { getDetails, uuidv4, generateFilePath, getRealPath, getVideoMetaData, getImageMetaData, getFileSize, backgroundUpload, cancelUpload, createVideoThumbnail, download, clearCache, UploadType, UploaderHttpMethod } from './utils';
export { Video, Audio, Image, backgroundUpload, cancelUpload, download, getDetails, uuidv4, generateFilePath, getRealPath, getVideoMetaData, getImageMetaData, createVideoThumbnail, clearCache, getFileSize, UploadType, UploaderHttpMethod, };
export type { VideoCompressorType };
declare const _default: {
    Video: VideoCompressorType;
    Audio: import("./utils").AudioType;
    Image: {
        compress(value: string, options?: import("./Image").CompressorOptions): Promise<string>;
    };
    getDetails: (mediaFullPath: string, extesnion?: "mp3" | "mp4") => Promise<any | null>;
    uuidv4: () => string;
    generateFilePath: any;
    getRealPath: (path: string, type: "video" | "image") => Promise<string>;
    getVideoMetaData: (filePath: string) => Promise<{
        extension: string;
        size: number;
        duration: number;
        width: number;
        height: number;
    }>;
    getImageMetaData: (filePath: string) => Promise<{
        ImageWidth: number;
        ImageHeight: number;
        Orientation: number;
        size: number;
        extension: string;
        exif: {
            [key: string]: string;
        };
    }>;
    getFileSize: (filePath: string) => Promise<string>;
    backgroundUpload: (url: string, fileUrl: string, options: import("./utils").UploaderOptions, onProgress?: (writtem: number, total: number) => void, abortSignal?: AbortSignal) => Promise<any>;
    createVideoThumbnail: (fileUrl: string, options?: {
        headers?: {
            [key: string]: string;
        };
    }) => Promise<{
        path: string;
        size: number;
        mime: string;
        width: number;
        height: number;
    }>;
    clearCache: (cacheDir?: string) => Promise<string>;
    download: (fileUrl: string, downloadProgress?: (progress: number) => void, progressDivider?: number) => Promise<any>;
    UploadType: typeof UploadType;
    UploaderHttpMethod: typeof UploaderHttpMethod;
};
export default _default;
//# sourceMappingURL=index.d.ts.map