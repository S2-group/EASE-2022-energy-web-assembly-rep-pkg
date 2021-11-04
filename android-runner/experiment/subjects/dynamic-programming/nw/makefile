SHELL := /bin/bash

include ../../common/options.mk

EMOPTIONS = -s TOTAL_MEMORY=399966208

DIMENSIONS = "4096"
PENALTY = "1"
ASMJS_RUN_ARGUMENT = "'-n', '"$(DIMENSIONS)"', '-g', '"$(PENALTY)"'"
C_RUN_ARGUMENT = "-n "$(DIMENSIONS)" -g "$(PENALTY)
JS_RUN_ARGUMENT = "runNeedle("$(DIMENSIONS)","$(PENALTY)")"
WEBCL_CALL = "webclNeedle("$(OPENCL_PLATFORM)", "$(OPENCL_DEVICE)", "$(DIMENSIONS)","$(PENALTY)")"
FILENAME = "needle"

build: build/js/run.html build/wasm/run.html

build/wasm:
	mkdir -p build/wasm

build/wasm/run.html: build/wasm \
            c/needle.c
	$(EMCC) c/needle.c \
			../../common/common_rand.c \
			-I../../common \
			$(EMOPTIONS) -s WASM=1 -lm -o build/wasm/run.html

build/js:
	mkdir -p build/js

build/js/needle.js:
	cp js/needle.js build/js/$(FILENAME).js

build/js/run.html: build/js build/js/needle.js
	cat ../../utils/js/run_template.html > build/js/run.html
	sed -i.bak s/FILENAME/$(FILENAME)/g build/js/run.html
	sed -i.bak s/RUN_ARGUMENT/$(JS_RUN_ARGUMENT)/g build/js/run.html

clean:
	rm -rf build
