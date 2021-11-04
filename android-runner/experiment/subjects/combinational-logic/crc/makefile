SHELL := /bin/bash

include ../../common/options.mk

# Should be a power of 2
PAGE_SIZE = "65536"
NB_PAGES = "128"
NB_REPETITIONS = "150"

ASMJS_RUN_ARGUMENT = "'-n', '"$(NB_PAGES)"', '-s', '"$(PAGE_SIZE)"', '-r', '"$(NB_REPETITIONS)"'"
C_RUN_ARGUMENT = "-n "$(NB_PAGES)" -s "$(PAGE_SIZE)" -r "$(NB_REPETITIONS)
JS_RUN_ARGUMENT = "runCRC("$(NB_PAGES)","$(PAGE_SIZE)","$(NB_REPETITIONS)")"
WEBCL_CALL = "webclCRC("$(OPENCL_PLATFORM)", "$(OPENCL_DEVICE)", "$(NB_PAGES)","$(PAGE_SIZE)","$(NB_REPETITIONS)")"
FILENAME = "crc"

build: build/wasm/run.html build/js/run.html

build/wasm:
	mkdir -p build/wasm

build/wasm/run.html: build/wasm c/crc_serial.c common/common.c common/crc_formats.c common/common_args_serial.c
	$(EMCC) -I./common/ -I../../common/ ../../common/common_rand.c c/crc_serial.c common/common.c common/crc_formats.c common/common_args_serial.c -lm -s WASM=1 -o build/wasm/run.html

build/js:
	mkdir -p build/js

build/js/crc.js:
	cp js/crc.js build/js/

build/js/run.html: build/js build/js/crc.js
	cat ../../utils/js/run_template.html > build/js/run.html
	sed -i.bak s/FILENAME/$(FILENAME)/g build/js/run.html
	sed -i.bak s/RUN_ARGUMENT/$(JS_RUN_ARGUMENT)/g build/js/run.html

clean:
	rm -rf build
