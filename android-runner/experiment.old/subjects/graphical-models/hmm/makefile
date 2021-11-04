SHELL := /bin/bash

include ../../common/options.mk

EMOPTIONS = -s TOTAL_MEMORY=399966208

ASMJS_RUN_ARGUMENT = "'-v', 'n', '-n', '512'"
C_RUN_ARGUMENT = "-v n -n 512"
JS_RUN_ARGUMENT = "bwa_hmm('n', 512)"
WEBCL_CALL = "webclBWAHmm("$(OPENCL_PLATFORM)", "$(OPENCL_DEVICE)", 'n', 512)"
FILENAME = "hmm"

build: build/js/run.html build/wasm/run.html

build/wasm:
	mkdir -p build/wasm

build/wasm/run.html: build/wasm \
            c/main_bwa_hmm.c
	$(EMCC) c/main_bwa_hmm.c \
			../../common/common.c \
			../../common/common_rand.c \
			-I../../common \
			$(EMOPTIONS) -s WASM=1 -lm -o build/wasm/run.html

build/js:
	mkdir -p build/js

build/js/hmm.js:
	cp js/bwa_hmm.js build/js/$(FILENAME).js

build/js/run.html: build/js build/js/hmm.js
	cat ../../utils/js/run_template.html > build/js/run.html
	sed -i.bak s/FILENAME/$(FILENAME)/g build/js/run.html
	sed -i.bak s/RUN_ARGUMENT/$(JS_RUN_ARGUMENT)/g build/js/run.html

clean:
	rm -rf build
