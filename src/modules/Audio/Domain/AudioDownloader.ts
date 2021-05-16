export interface AudioDownloader {
    downloadFromUrl(videoUrl: string): Promise<string>;
}