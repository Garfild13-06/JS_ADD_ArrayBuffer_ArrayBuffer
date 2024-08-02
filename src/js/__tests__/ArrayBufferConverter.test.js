import ArrayBufferConverter, {getBuffer} from '../ArrayBufferConverter';

test('should load buffer and convert to string', () => {
  const buffer = getBuffer();
  const converter = new ArrayBufferConverter();
  converter.load(buffer);
  const result = converter.toString();
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(result).toBe(expected);
});

test('should handle empty buffer', () => {
  const buffer = new ArrayBuffer(0);
  const converter = new ArrayBufferConverter();
  converter.load(buffer);
  const result = converter.toString();
  const expected = '';
  expect(result).toBe(expected);
});

test('should handle single character buffer', () => {
  const data = 'A';
  const buffer = (input => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    bufferView[0] = input.charCodeAt(0);
    return buffer;
  })(data);
  const converter = new ArrayBufferConverter();
  converter.load(buffer);
  const result = converter.toString();
  const expected = 'A';
  expect(result).toBe(expected);
});
