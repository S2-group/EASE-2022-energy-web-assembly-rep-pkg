SHELL := /bin/bash

include ../../common/options.mk

EMOPTIONS = -s TOTAL_MEMORY=1000013824

DIM = 50000
DENSITY = 2000
STDDEV = 0.01
ITERATIONS = 100
ASMJS_RUN_ARGUMENT = "'-n', $(DIM), '-s', $(STDDEV), '-d', $(DENSITY), '-i', $(ITERATIONS)"
C_RUN_ARGUMENT = "-n $(DIM) -s $(STDDEV) -d $(DENSITY) -i $(ITERATIONS)"
JS_RUN_ARGUMENT = "spmvRun($(DIM), $(DENSITY), $(STDDEV), $(ITERATIONS))"
WEBCL_CALL = "spmvRun("$(OPENCL_PLATFORM)", "$(OPENCL_DEVICE)", "$(DIM)", "$(DENSITY)", "$(STDDEV)", "$(ITERATIONS)")"
FILENAME = "spmv"

build: build/js/run.html build/wasm/run.html

build/wasm:
	mkdir -p build/wasm

build/wasm/run.html: build/wasm \
            c/csr_spmv.c \
			common/common.c \
			common/common_args_serial.c \
			common/sparse_formats.c \
			common/ziggurat.c
	$(EMCC) c/csr_spmv.c \
			common/common.c \
			common/sparse_formats.c \
			common/common_args_serial.c \
			common/ziggurat.c \
			../../common/common_rand.c \
			-Icommon \
			-I../../common \
			-DSERIAL \
			-std=c99 \
			$(EMOPTIONS) -s WASM=1 -lm -o build/wasm/run.html

build/js:
	mkdir -p build/js

build/js/spmv.js:
	cp js/spmv.js build/js/$(FILENAME).js

build/js/run.html: build/js build/js/spmv.js
	cat ../../utils/js/run_template.html > build/js/run.html
	sed -i.bak s/FILENAME/$(FILENAME)/g build/js/run.html
	sed -i.bak s/RUN_ARGUMENT/$(JS_RUN_ARGUMENT)/g build/js/run.html

clean:
	rm -rf build
