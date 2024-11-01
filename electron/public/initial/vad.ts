import { MicVAD, utils } from "@ricky0123/vad-web";
import type * as ort from "onnxruntime-web";
// <script src="https://cdn.jsdelivr.net/npm/onnxruntime-web@1.19.2/dist/ort.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/@ricky0123/vad-web@0.0.19/dist/bundle.min.js"></script>
// 	"ort-wasm-threaded.wasm": "/ort-wasm-threaded.wasm",
//   "ort-wasm-simd-threaded.wasm": "../node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.wasm",
//   "ort-wasm-simd.wasm": "../node_modules/onnxruntime-web/dist/ort-wasm-simd.wasm",
//   "ort-wasm.wasm": "../node_modules/onnxruntime-web/dist/ort-wasm.wasm",
// node_modules/@ricky0123/vad-web/dist/vad.worklet.bundle.min.js
// node_modules/@ricky0123/vad-web/dist/silero_vad.onnx
// node_modules/@ricky0123/vad-web/dist/*.onnx
// node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.mjs
// node_modules/onnxruntime-web/dist/*.wasm

async function toggleVAD() {
	const appPath = location.href.replace('/public/initial/initial.html', '');
	const myvad = await MicVAD.new({
		ortConfig(ortConfig) {
			const wasmPaths: ort.Env.WasmFilePaths = {
				wasm: `${appPath}/node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.wasm`,
				mjs: `${appPath}/node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.mjs`
			};
			ortConfig.env.wasm.wasmPaths = wasmPaths;
		},
		workletURL: `${appPath}/node_modules/@ricky0123/vad-web/dist/vad.worklet.bundle.min.js`,
		modelURL: `${appPath}/node_modules/@ricky0123/vad-web/dist/silero_vad.onnx`,
		onVADMisfire: () => {
			console.log("Vad misfire");
		},
		onSpeechStart: () => {
			console.log("Speech start detected")
		},
		onSpeechEnd: (audio) => { // Float32Array - sample rate 16000
			console.log("Speech end");
			const wavBuffer = utils.encodeWAV(audio);
			const base64 = utils.arrayBufferToBase64(wavBuffer);
			const url = `data:audio/wav;base64,${base64}`;
			console.log("url", url.length);
			const audioList = document.getElementById('audioList');
			const newLI = document.createElement('li');
			const newAudio = document.createElement('audio');
			newAudio.setAttribute('controls', 'true');
			newAudio.setAttribute('src', url);
			newLI?.append(newAudio);
			audioList?.append(newLI);
		}
	})
	myvad.start()
	console.log("myvad:", myvad);
}

// @ts-ignore
window.toggleVAD = toggleVAD;
