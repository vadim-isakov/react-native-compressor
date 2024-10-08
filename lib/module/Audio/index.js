import { Compressor } from '../Main';
import { DEFAULT_COMPRESS_AUDIO_OPTIONS } from '../utils';
const NativeAudio = Compressor;
const Audio = {
  compress: async (url, options = DEFAULT_COMPRESS_AUDIO_OPTIONS) => {
    try {
      return NativeAudio.compress_audio(url, options);
    } catch (error) {
      throw error.message;
    }
  }
};
export default Audio;
//# sourceMappingURL=index.js.map