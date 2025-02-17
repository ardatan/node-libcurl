/**
 * Copyright (c) Jonathan Cardoso Machado. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// This file was generated by scripts/build-constants.js on 2024-09-01T11:00:06.587Z
// Do not edit manually

/**
 * @public
 */
export interface CurlInfo {
  /**
   * The session's active socket.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_ACTIVESOCKET.html|Official libcurl documentation}
   */
  readonly ACTIVESOCKET: 'ACTIVESOCKET'

  /**
   * The time it took from the start until the SSL connect/handshake with the remote host was completed as a double in number of seconds. (Added in )
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_APPCONNECT_TIME.html|Official libcurl documentation}
   */
  readonly APPCONNECT_TIME: 'APPCONNECT_TIME'

  /**
   * The time it took from the start until the SSL connect/handshake with the remote host was completed in number of microseconds. (Added in )
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_APPCONNECT_TIME_T.html|Official libcurl documentation}
   */
  readonly APPCONNECT_TIME_T: 'APPCONNECT_TIME_T'

  /**
   * Get the default value for .
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_CAINFO.html|Official libcurl documentation}
   */
  readonly CAINFO: 'CAINFO'

  /**
   * Get the default value for .
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_CAPATH.html|Official libcurl documentation}
   */
  readonly CAPATH: 'CAPATH'

  /**
   * Certificate chain.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_CERTINFO.html|Official libcurl documentation}
   */
  readonly CERTINFO: 'CERTINFO'

  /**
   * Whether or not a time conditional was met or 304 HTTP response.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_CONDITION_UNMET.html|Official libcurl documentation}
   */
  readonly CONDITION_UNMET: 'CONDITION_UNMET'

  /**
   * The ID of the last connection used by the transfer. (Added in )
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_CONN_ID.html|Official libcurl documentation}
   */
  readonly CONN_ID: 'CONN_ID'

  /**
   * The time it took from the start until the connect to the remote host (or proxy) was completed. As a double.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_CONNECT_TIME.html|Official libcurl documentation}
   */
  readonly CONNECT_TIME: 'CONNECT_TIME'

  /**
   * The time it took from the start until the connect to the remote host (or proxy) was completed. In microseconds. See .
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_CONNECT_TIME_T.html|Official libcurl documentation}
   */
  readonly CONNECT_TIME_T: 'CONNECT_TIME_T'

  /**
   * (Deprecated) Content length from the Content-Length header.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_CONTENT_LENGTH_DOWNLOAD.html|Official libcurl documentation}
   */
  readonly CONTENT_LENGTH_DOWNLOAD: 'CONTENT_LENGTH_DOWNLOAD'

  /**
   * Content length from the Content-Length header.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_CONTENT_LENGTH_DOWNLOAD_T.html|Official libcurl documentation}
   */
  readonly CONTENT_LENGTH_DOWNLOAD_T: 'CONTENT_LENGTH_DOWNLOAD_T'

  /**
   * (Deprecated) Upload size.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_CONTENT_LENGTH_UPLOAD.html|Official libcurl documentation}
   */
  readonly CONTENT_LENGTH_UPLOAD: 'CONTENT_LENGTH_UPLOAD'

  /**
   * Upload size.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_CONTENT_LENGTH_UPLOAD_T.html|Official libcurl documentation}
   */
  readonly CONTENT_LENGTH_UPLOAD_T: 'CONTENT_LENGTH_UPLOAD_T'

  /**
   * Content type from the Content-Type: header. We recommend using  instead.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_CONTENT_TYPE.html|Official libcurl documentation}
   */
  readonly CONTENT_TYPE: 'CONTENT_TYPE'

  /**
   * List of all known cookies.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_COOKIELIST.html|Official libcurl documentation}
   */
  readonly COOKIELIST: 'COOKIELIST'

  /**
   * Last used HTTP method.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_EFFECTIVE_METHOD.html|Official libcurl documentation}
   */
  readonly EFFECTIVE_METHOD: 'EFFECTIVE_METHOD'

  /**
   * Last used URL.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_EFFECTIVE_URL.html|Official libcurl documentation}
   */
  readonly EFFECTIVE_URL: 'EFFECTIVE_URL'

  /**
   * Remote time of the retrieved document.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_FILETIME.html|Official libcurl documentation}
   */
  readonly FILETIME: 'FILETIME'

  /**
   * Remote time of the retrieved document.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_FILETIME_T.html|Official libcurl documentation}
   */
  readonly FILETIME_T: 'FILETIME_T'

  /**
   * The entry path after logging in to an FTP server.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_FTP_ENTRY_PATH.html|Official libcurl documentation}
   */
  readonly FTP_ENTRY_PATH: 'FTP_ENTRY_PATH'

  /**
   * Number of bytes of all headers received.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_HEADER_SIZE.html|Official libcurl documentation}
   */
  readonly HEADER_SIZE: 'HEADER_SIZE'

  /**
   * Last proxy CONNECT response code.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_HTTP_CONNECTCODE.html|Official libcurl documentation}
   */
  readonly HTTP_CONNECTCODE: 'HTTP_CONNECTCODE'

  /**
   * The http version used in the connection.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_HTTP_VERSION.html|Official libcurl documentation}
   */
  readonly HTTP_VERSION: 'HTTP_VERSION'

  /**
   * Available HTTP authentication methods.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_HTTPAUTH_AVAIL.html|Official libcurl documentation}
   */
  readonly HTTPAUTH_AVAIL: 'HTTPAUTH_AVAIL'

  /**
   * (Deprecated) Last socket used.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_LASTSOCKET.html|Official libcurl documentation}
   */
  readonly LASTSOCKET: 'LASTSOCKET'

  /**
   * Source IP address of the last connection.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_LOCAL_IP.html|Official libcurl documentation}
   */
  readonly LOCAL_IP: 'LOCAL_IP'

  /**
   * Source port number of the last connection.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_LOCAL_PORT.html|Official libcurl documentation}
   */
  readonly LOCAL_PORT: 'LOCAL_PORT'

  /**
   * Time from start until name resolving completed as a double.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_NAMELOOKUP_TIME.html|Official libcurl documentation}
   */
  readonly NAMELOOKUP_TIME: 'NAMELOOKUP_TIME'

  /**
   * Time from start until name resolving completed in number of microseconds.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_NAMELOOKUP_TIME_T.html|Official libcurl documentation}
   */
  readonly NAMELOOKUP_TIME_T: 'NAMELOOKUP_TIME_T'

  /**
   * Number of new successful connections used for previous transfer.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_NUM_CONNECTS.html|Official libcurl documentation}
   */
  readonly NUM_CONNECTS: 'NUM_CONNECTS'

  /**
   * The errno from the last failure to connect.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_OS_ERRNO.html|Official libcurl documentation}
   */
  readonly OS_ERRNO: 'OS_ERRNO'

  /**
   * The time it took from the start until the last byte is sent by libcurl. In microseconds. (Added in ) See CURLINFO_POSTTRANSFER_TIME_T(3)
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_POSTTRANSFER_TIME_T.html|Official libcurl documentation}
   */
  readonly POSTTRANSFER_TIME_T: 'POSTTRANSFER_TIME_T'

  /**
   * The time it took from the start until the file transfer is just about to begin. This includes all pre-transfer commands and negotiations that are specific to the particular protocol(s) involved.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_PRETRANSFER_TIME.html|Official libcurl documentation}
   */
  readonly PRETRANSFER_TIME: 'PRETRANSFER_TIME'

  /**
   * The time it took from the start until the file transfer is just about to begin. This includes all pre-transfer commands and negotiations that are specific to the particular protocol(s) involved. In microseconds.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_PRETRANSFER_TIME_T.html|Official libcurl documentation}
   */
  readonly PRETRANSFER_TIME_T: 'PRETRANSFER_TIME_T'

  /**
   * Destination IP address of the last connection.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_PRIMARY_IP.html|Official libcurl documentation}
   */
  readonly PRIMARY_IP: 'PRIMARY_IP'

  /**
   * Destination port of the last connection.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_PRIMARY_PORT.html|Official libcurl documentation}
   */
  readonly PRIMARY_PORT: 'PRIMARY_PORT'

  /**
   * User's private data pointer.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_PRIVATE.html|Official libcurl documentation}
   */
  readonly PRIVATE: 'PRIVATE'

  /**
   * (Deprecated) The protocol used for the connection. (Added in )
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_PROTOCOL.html|Official libcurl documentation}
   */
  readonly PROTOCOL: 'PROTOCOL'

  /**
   * Detailed proxy error.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_PROXY_ERROR.html|Official libcurl documentation}
   */
  readonly PROXY_ERROR: 'PROXY_ERROR'

  /**
   * Proxy certificate verification result.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_PROXY_SSL_VERIFYRESULT.html|Official libcurl documentation}
   */
  readonly PROXY_SSL_VERIFYRESULT: 'PROXY_SSL_VERIFYRESULT'

  /**
   * Available HTTP proxy authentication methods.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_PROXYAUTH_AVAIL.html|Official libcurl documentation}
   */
  readonly PROXYAUTH_AVAIL: 'PROXYAUTH_AVAIL'

  /**
   * The time during which the transfer was held in a waiting queue before it could start for real in number of microseconds. (Added in )
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_QUEUE_TIME_T.html|Official libcurl documentation}
   */
  readonly QUEUE_TIME_T: 'QUEUE_TIME_T'

  /**
   * Total number of redirects that were followed.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_REDIRECT_COUNT.html|Official libcurl documentation}
   */
  readonly REDIRECT_COUNT: 'REDIRECT_COUNT'

  /**
   * The time it took for all redirection steps include name lookup, connect, pretransfer and transfer before final transaction was started. So, this is zero if no redirection took place. As a double.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_REDIRECT_TIME.html|Official libcurl documentation}
   */
  readonly REDIRECT_TIME: 'REDIRECT_TIME'

  /**
   * The time it took for all redirection steps include name lookup, connect, pretransfer and transfer before final transaction was started. So, this is zero if no redirection took place. In number of microseconds.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_REDIRECT_TIME_T.html|Official libcurl documentation}
   */
  readonly REDIRECT_TIME_T: 'REDIRECT_TIME_T'

  /**
   * URL a redirect would take you to, had you enabled redirects.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_REDIRECT_URL.html|Official libcurl documentation}
   */
  readonly REDIRECT_URL: 'REDIRECT_URL'

  /**
   * Referrer header.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_REFERER.html|Official libcurl documentation}
   */
  readonly REFERER: 'REFERER'

  /**
   * Number of bytes sent in the issued HTTP requests.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_REQUEST_SIZE.html|Official libcurl documentation}
   */
  readonly REQUEST_SIZE: 'REQUEST_SIZE'

  /**
   * Last received response code.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_RESPONSE_CODE.html|Official libcurl documentation}
   */
  readonly RESPONSE_CODE: 'RESPONSE_CODE'

  /**
   * The value from the Retry-After header.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_RETRY_AFTER.html|Official libcurl documentation}
   */
  readonly RETRY_AFTER: 'RETRY_AFTER'

  /**
   * The RTSP client CSeq that is expected next.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_RTSP_CLIENT_CSEQ.html|Official libcurl documentation}
   */
  readonly RTSP_CLIENT_CSEQ: 'RTSP_CLIENT_CSEQ'

  /**
   * RTSP CSeq last received.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_RTSP_CSEQ_RECV.html|Official libcurl documentation}
   */
  readonly RTSP_CSEQ_RECV: 'RTSP_CSEQ_RECV'

  /**
   * The RTSP server CSeq that is expected next.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_RTSP_SERVER_CSEQ.html|Official libcurl documentation}
   */
  readonly RTSP_SERVER_CSEQ: 'RTSP_SERVER_CSEQ'

  /**
   * RTSP session ID.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_RTSP_SESSION_ID.html|Official libcurl documentation}
   */
  readonly RTSP_SESSION_ID: 'RTSP_SESSION_ID'

  /**
   * The scheme used for the connection. (Added in )
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_SCHEME.html|Official libcurl documentation}
   */
  readonly SCHEME: 'SCHEME'

  /**
   * (Deprecated) Number of bytes downloaded.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_SIZE_DOWNLOAD.html|Official libcurl documentation}
   */
  readonly SIZE_DOWNLOAD: 'SIZE_DOWNLOAD'

  /**
   * Number of bytes downloaded.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_SIZE_DOWNLOAD_T.html|Official libcurl documentation}
   */
  readonly SIZE_DOWNLOAD_T: 'SIZE_DOWNLOAD_T'

  /**
   * (Deprecated) Number of bytes uploaded.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_SIZE_UPLOAD.html|Official libcurl documentation}
   */
  readonly SIZE_UPLOAD: 'SIZE_UPLOAD'

  /**
   * Number of bytes uploaded.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_SIZE_UPLOAD_T.html|Official libcurl documentation}
   */
  readonly SIZE_UPLOAD_T: 'SIZE_UPLOAD_T'

  /**
   * (Deprecated) Average download speed.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_SPEED_DOWNLOAD.html|Official libcurl documentation}
   */
  readonly SPEED_DOWNLOAD: 'SPEED_DOWNLOAD'

  /**
   * Average download speed.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_SPEED_DOWNLOAD_T.html|Official libcurl documentation}
   */
  readonly SPEED_DOWNLOAD_T: 'SPEED_DOWNLOAD_T'

  /**
   * (Deprecated) Average upload speed.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_SPEED_UPLOAD.html|Official libcurl documentation}
   */
  readonly SPEED_UPLOAD: 'SPEED_UPLOAD'

  /**
   * Average upload speed in number of bytes per second.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_SPEED_UPLOAD_T.html|Official libcurl documentation}
   */
  readonly SPEED_UPLOAD_T: 'SPEED_UPLOAD_T'

  /**
   * A list of OpenSSL crypto engines.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_SSL_ENGINES.html|Official libcurl documentation}
   */
  readonly SSL_ENGINES: 'SSL_ENGINES'

  /**
   * Certificate verification result.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_SSL_VERIFYRESULT.html|Official libcurl documentation}
   */
  readonly SSL_VERIFYRESULT: 'SSL_VERIFYRESULT'

  /**
   * The time it took from the start until the first byte is received by libcurl. As a double.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_STARTTRANSFER_TIME.html|Official libcurl documentation}
   */
  readonly STARTTRANSFER_TIME: 'STARTTRANSFER_TIME'

  /**
   * The time it took from the start until the first byte is received by libcurl. In microseconds.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_STARTTRANSFER_TIME_T.html|Official libcurl documentation}
   */
  readonly STARTTRANSFER_TIME_T: 'STARTTRANSFER_TIME_T'

  /**
   * (Deprecated) TLS session info that can be used for further processing. See . Use  instead!
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_TLS_SESSION.html|Official libcurl documentation}
   */
  readonly TLS_SESSION: 'TLS_SESSION'

  /**
   * TLS session info that can be used for further processing.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_TLS_SSL_PTR.html|Official libcurl documentation}
   */
  readonly TLS_SSL_PTR: 'TLS_SSL_PTR'

  /**
   * Total time of previous transfer.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_TOTAL_TIME.html|Official libcurl documentation}
   */
  readonly TOTAL_TIME: 'TOTAL_TIME'

  /**
   * Total time of previous transfer.
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_TOTAL_TIME_T.html|Official libcurl documentation}
   */
  readonly TOTAL_TIME_T: 'TOTAL_TIME_T'

  /**
   * Whether the proxy was used (Added in ).
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_USED_PROXY.html|Official libcurl documentation}
   */
  readonly USED_PROXY: 'USED_PROXY'

  /**
   * The ID of the transfer. (Added in )
   *
   * @see {@link https://curl.haxx.se/libcurl/c/CURLINFO_XFER_ID.html|Official libcurl documentation}
   */
  readonly XFER_ID: 'XFER_ID'
}

/**
 * @public
 */
export type CurlInfoName =
  | 'ACTIVESOCKET'
  | 'APPCONNECT_TIME'
  | 'APPCONNECT_TIME_T'
  | 'CAINFO'
  | 'CAPATH'
  | 'CERTINFO'
  | 'CONDITION_UNMET'
  | 'CONN_ID'
  | 'CONNECT_TIME'
  | 'CONNECT_TIME_T'
  | 'CONTENT_LENGTH_DOWNLOAD'
  | 'CONTENT_LENGTH_DOWNLOAD_T'
  | 'CONTENT_LENGTH_UPLOAD'
  | 'CONTENT_LENGTH_UPLOAD_T'
  | 'CONTENT_TYPE'
  | 'COOKIELIST'
  | 'EFFECTIVE_METHOD'
  | 'EFFECTIVE_URL'
  | 'FILETIME'
  | 'FILETIME_T'
  | 'FTP_ENTRY_PATH'
  | 'HEADER_SIZE'
  | 'HTTP_CONNECTCODE'
  | 'HTTP_VERSION'
  | 'HTTPAUTH_AVAIL'
  | 'LASTSOCKET'
  | 'LOCAL_IP'
  | 'LOCAL_PORT'
  | 'NAMELOOKUP_TIME'
  | 'NAMELOOKUP_TIME_T'
  | 'NUM_CONNECTS'
  | 'OS_ERRNO'
  | 'POSTTRANSFER_TIME_T'
  | 'PRETRANSFER_TIME'
  | 'PRETRANSFER_TIME_T'
  | 'PRIMARY_IP'
  | 'PRIMARY_PORT'
  | 'PRIVATE'
  | 'PROTOCOL'
  | 'PROXY_ERROR'
  | 'PROXY_SSL_VERIFYRESULT'
  | 'PROXYAUTH_AVAIL'
  | 'QUEUE_TIME_T'
  | 'REDIRECT_COUNT'
  | 'REDIRECT_TIME'
  | 'REDIRECT_TIME_T'
  | 'REDIRECT_URL'
  | 'REFERER'
  | 'REQUEST_SIZE'
  | 'RESPONSE_CODE'
  | 'RETRY_AFTER'
  | 'RTSP_CLIENT_CSEQ'
  | 'RTSP_CSEQ_RECV'
  | 'RTSP_SERVER_CSEQ'
  | 'RTSP_SESSION_ID'
  | 'SCHEME'
  | 'SIZE_DOWNLOAD'
  | 'SIZE_DOWNLOAD_T'
  | 'SIZE_UPLOAD'
  | 'SIZE_UPLOAD_T'
  | 'SPEED_DOWNLOAD'
  | 'SPEED_DOWNLOAD_T'
  | 'SPEED_UPLOAD'
  | 'SPEED_UPLOAD_T'
  | 'SSL_ENGINES'
  | 'SSL_VERIFYRESULT'
  | 'STARTTRANSFER_TIME'
  | 'STARTTRANSFER_TIME_T'
  | 'TLS_SESSION'
  | 'TLS_SSL_PTR'
  | 'TOTAL_TIME'
  | 'TOTAL_TIME_T'
  | 'USED_PROXY'
  | 'XFER_ID'
