SHELL := /bin/bash

include ../../common/options.mk

EMOPTIONS = -s TOTAL_MEMORY=399966208

EXPONENT = "10"
ASMJS_RUN_ARGUMENT = "'"$(EXPONENT)"'"
C_RUN_ARGUMENT = $(EXPONENT)
JS_RUN_ARGUMENT = "runFFT("$(EXPONENT)")"
FILENAME = "fft"

build: build/js/run.html build/wasm/run.html

build/wasm:
	mkdir -p build/wasm

build/wasm/run.html: build/wasm \
            c/fft.c \
			c/main.c \
			common/complex_simple.c \
            common/common.c
	$(EMCC) c/fft.c \
            c/main.c \
			common/common.c \
			../../common/common_rand.c \
			common/complex_simple.c \
			-Icommon \
			-I../../common \
			$(EMOPTIONS) -s WASM=1 -lm -o build/wasm/run.html

build/js:
	mkdir -p build/js

build/js/fft.js:
	cp js/fft.js build/js/$(FILENAME).js

build/js/run.html: build/js build/js/fft.js
	cat ../../utils/js/run_template.html > build/js/run.html
	sed -i.bak s/FILENAME/$(FILENAME)/g build/js/run.html
	sed -i.bak s/RUN_ARGUMENT/$(JS_RUN_ARGUMENT)/g build/js/run.html

clean:
	rm -rf build
