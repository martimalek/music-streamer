export interface VideoConverter {
    convertFromUrlToMP3(videoUrl: string): Promise<any>;
}