export interface File {
  id: string;
  name: string;
  size: number;
  type: string;
  base64: string | ArrayBuffer;
  description: string;
}
