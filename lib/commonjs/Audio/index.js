"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Main = require("../Main");
var _utils = require("../utils");
const NativeAudio = _Main.Compressor;
const Audio = {
  compress: async (url, options = _utils.DEFAULT_COMPRESS_AUDIO_OPTIONS) => {
    try {
      return NativeAudio.compress_audio(url, options);
    } catch (error) {
      throw error.message;
    }
  }
};
var _default = exports.default = Audio;
//# sourceMappingURL=index.js.map