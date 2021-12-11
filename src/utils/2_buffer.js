// https://github.com/Beatso/ScalePixelArt/blob/main/index.js
/**
 * 
 * @param {*} str 
 * @returns {*}
 */
function sharp(str) {}

/** 
 * Resizes an image with nearest neighbour interpolation.
 * @param {Buffer | Uint8Array | Uint8ClampedArray | Int8Array | Uint16Array | Int16Array | Uint32Array | Int32Array | Float32Array | Float64Array | string} input - The image to resize.
 * @param {number} scale - How many times bigger the image should be. Can be negative to shrink the image.
 * @returns {Promise<Buffer>} - The resized image.
*/
const scaleImage = async (input, scale) => {
	
	try {
		const image = sharp(input)
		const metadata = await image.metadata()
		const output = await image
			.resize ( metadata.width * scale, null, { kernel: "nearest" })
			.toBuffer()
		return output
	}
	
	catch (error) {
		throw error
	}

}