// src/types/vercel-node.d.ts
declare module '@vercel/node' {
  import type { IncomingMessage, ServerResponse } from 'http';

  export interface VercelRequest extends IncomingMessage {
    body?: any;
    query?: Record<string, any>;
    cookies?: Record<string, string>;
    method?: string;
  }

  export interface VercelResponse extends ServerResponse {
    status(code: number): VercelResponse;
    json(body: any): VercelResponse;
    send(body: any): VercelResponse;
  }
}