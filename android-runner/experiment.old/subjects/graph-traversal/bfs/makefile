SHELL := /bin/bash

include ../../common/options.mk

# Original options used by Vince
#EMOPTIONS = -s TOTAL_MEMORY=1000000000
#NB_NODES = "4194304"
EMOPTIONS = -s TOTAL_MEMORY=399966208
NB_NODES = "3000000"

ASMJS_RUN_ARGUMENT = "'"$(NB_NODES)"'"
C_RUN_ARGUMENT = $(NB_NODES)
JS_RUN_ARGUMENT = "BFSGraph("$(NB_NODES)")"
WEBCL_CALL = "webclBFS("$(OPENCL_PLATFORM)", "$(OPENCL_DEVICE)", "$(NB_NODES)")"
FILENAME = "bfs"

build: build/js/run.html build/wasm/run.html

build/wasm:
	mkdir -p build/wasm

build/wasm/run.html: build/wasm common/common.c c/bfs.cpp
	$(EMCPP) -I../../common/ -Icommon/ ../../common/common_rand.c common/common.c c/bfs.cpp $(EMOPTIONS) -s WASM=1 -o build/wasm/run.html

build/js:
	mkdir -p build/js

build/js/bfs.js:
	cp js/bfs.js build/js/

build/js/run.html: build/js build/js/bfs.js
	cat ../../utils/js/run_template.html > build/js/run.html
	sed -i.bak s/FILENAME/$(FILENAME)/g build/js/run.html
	sed -i.bak s/RUN_ARGUMENT/$(JS_RUN_ARGUMENT)/g build/js/run.html

clean:
	rm -rf build
