SHELL := /bin/bash

include ../../common/options.mk

EMOPTIONS = -s TOTAL_MEMORY=450035712
MATLAB_OPTIONS = "-nodisplay -r "
OUTPUT_FILTER = "sed -n -e '/{/,/}/p'"

NB_INPUT_ELEMS = "2850000"
ASMJS_RUN_ARGUMENT = "['"$(NB_INPUT_ELEMS)"']"
C_RUN_ARGUMENT = $(NB_INPUT_ELEMS)
JS_RUN_ARGUMENT = "runBackProp("$(NB_INPUT_ELEMS)")"
MATLAB_RUN_ARGUMENT = "cd build/matlab/; runBackProp("$(NB_INPUT_ELEMS)"); exit();"
WEBCL_CALL = "webclbackprop("$(OPENCL_PLATFORM)", "$(OPENCL_DEVICE)", "$(NB_INPUT_ELEMS)")"
FILENAME = "backprop"

build: build/wasm/run.html build/js/run.html

build/wasm:
	mkdir -p build/wasm

build/wasm/data.js:
	cp data/data.js build/wasm/data.js

build/wasm/run.html: build/wasm c/*.c c/*.h
	$(EMCC) -I../../common/ ../../common/common.c ../../common/common_rand.c c/imagenet.c c/backprop_kernel.c c/backprop.c c/facetrain.c $(EMOPTIONS) -s WASM=1 -lm -o build/wasm/run.html 

build/js:
	mkdir -p build/js

build/js/backprop.js:
	cp js/backprop.js build/js/$(FILENAME).js

build/js/run.html: build/js build/js/backprop.js
	cat ../../utils/js/run_template.html > build/js/run.html
	sed -i.bak s/FILENAME/$(FILENAME)/g build/js/run.html
	sed -i.bak s/RUN_ARGUMENT/$(JS_RUN_ARGUMENT)/g build/js/run.html

clean:
	rm -rf build
