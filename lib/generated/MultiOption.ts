/**
 * Copyright (c) Jonathan Cardoso Machado. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// This file was generated by scripts/build-constants.js on 2024-09-01T11:00:06.657Z
// Do not edit manually

/**
 * @public
 */
export interface MultiOption {
  /**
   * @deprecated
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLMOPT_CHUNK_LENGTH_PENALTY_SIZE.html|Official libcurl documentation}
   */
  readonly CHUNK_LENGTH_PENALTY_SIZE: 'CHUNK_LENGTH_PENALTY_SIZE'

  /**
   * @deprecated
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLMOPT_CONTENT_LENGTH_PENALTY_SIZE.html|Official libcurl documentation}
   */
  readonly CONTENT_LENGTH_PENALTY_SIZE: 'CONTENT_LENGTH_PENALTY_SIZE'

  /**
   * Max concurrent streams for http2.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_CONCURRENT_STREAMS.html|Official libcurl documentation}
   */
  readonly MAX_CONCURRENT_STREAMS: 'MAX_CONCURRENT_STREAMS'

  /**
   * Max number of connections to a single host.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_HOST_CONNECTIONS.html|Official libcurl documentation}
   */
  readonly MAX_HOST_CONNECTIONS: 'MAX_HOST_CONNECTIONS'

  /**
   * @deprecated.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_PIPELINE_LENGTH.html|Official libcurl documentation}
   */
  readonly MAX_PIPELINE_LENGTH: 'MAX_PIPELINE_LENGTH'

  /**
   * Max simultaneously open connections.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLMOPT_MAX_TOTAL_CONNECTIONS.html|Official libcurl documentation}
   */
  readonly MAX_TOTAL_CONNECTIONS: 'MAX_TOTAL_CONNECTIONS'

  /**
   * Size of connection cache.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLMOPT_MAXCONNECTS.html|Official libcurl documentation}
   */
  readonly MAXCONNECTS: 'MAXCONNECTS'

  /**
   * Enable HTTP multiplexing.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLMOPT_PIPELINING.html|Official libcurl documentation}
   */
  readonly PIPELINING: 'PIPELINING'

  /**
   * @deprecated.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLMOPT_PIPELINING_SERVER_BL.html|Official libcurl documentation}
   */
  readonly PIPELINING_SERVER_BL: 'PIPELINING_SERVER_BL'

  /**
   * @deprecated.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLMOPT_PIPELINING_SITE_BL.html|Official libcurl documentation}
   */
  readonly PIPELINING_SITE_BL: 'PIPELINING_SITE_BL'

  /**
   * Pointer to pass to push callback.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLMOPT_PUSHDATA.html|Official libcurl documentation}
   */
  readonly PUSHDATA: 'PUSHDATA'

  /**
   * Callback that approves or denies server pushes.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLMOPT_PUSHFUNCTION.html|Official libcurl documentation}
   */
  readonly PUSHFUNCTION: 'PUSHFUNCTION'

  /**
   * Custom pointer passed to the socket callback.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLMOPT_SOCKETDATA.html|Official libcurl documentation}
   */
  readonly SOCKETDATA: 'SOCKETDATA'

  /**
   * Callback informed about what to wait for.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLMOPT_SOCKETFUNCTION.html|Official libcurl documentation}
   */
  readonly SOCKETFUNCTION: 'SOCKETFUNCTION'

  /**
   * Custom pointer to pass to timer callback.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLMOPT_TIMERDATA.html|Official libcurl documentation}
   */
  readonly TIMERDATA: 'TIMERDATA'

  /**
   * Callback to receive timeout values.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLMOPT_TIMERFUNCTION.html|Official libcurl documentation}
   */
  readonly TIMERFUNCTION: 'TIMERFUNCTION'
}

/**
 * @public
 */
export type MultiOptionName =
  | 'CHUNK_LENGTH_PENALTY_SIZE'
  | 'CONTENT_LENGTH_PENALTY_SIZE'
  | 'MAX_CONCURRENT_STREAMS'
  | 'MAX_HOST_CONNECTIONS'
  | 'MAX_PIPELINE_LENGTH'
  | 'MAX_TOTAL_CONNECTIONS'
  | 'MAXCONNECTS'
  | 'PIPELINING'
  | 'PIPELINING_SERVER_BL'
  | 'PIPELINING_SITE_BL'
  | 'PUSHDATA'
  | 'PUSHFUNCTION'
  | 'SOCKETDATA'
  | 'SOCKETFUNCTION'
  | 'TIMERDATA'
  | 'TIMERFUNCTION'
