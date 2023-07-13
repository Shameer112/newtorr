export interface ClientOptions {
  secret?: string;

  /**
   * Timeout for each request (ms).
   * @default 5000
   * @public
   */
  timeout?: number;

  /**
   * Timeout for waiting socket (ms).
   * @default 5000
   * @public
   */
  openTimeout?: number;
}

export interface TorrentFile {}

export interface TorrentPiece {
  readonly length: number;

  readonly missing: number;
}
