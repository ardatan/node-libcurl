#!/bin/bash

if [ -f `curl-config --prefix`/lib/libcurl.dylib ]; then
    install_name_tool -change $(otool -D `curl-config --prefix`/lib/libcurl.dylib | sed -n 2p) @rpath/libcurl.dylib $1
else
    echo "File does not exist. This means libcurl binaries were not found"
    exit 1
fi
