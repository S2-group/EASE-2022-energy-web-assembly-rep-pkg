SHELL := /bin/bash

include ../../common/options.mk

SIZE = "16"
ASMJS_RUN_ARGUMENT = "'-s', '"$(SIZE)"'"
C_RUN_ARGUMENT = "-s "$(SIZE)
JS_RUN_ARGUMENT = "runNQueens("$(SIZE)")"
WEBCL_CALL = "webclNQ("$(OPENCL_PLATFORM)", "$(OPENCL_DEVICE)", "$(SIZE)")"
FILENAME = "nqueens"
NUM_REPETITIONS = 3

build: build/wasm/run.html build/js/run.html

build/c:
	mkdir -p build/c

build/wasm:
	mkdir -p build/wasm

build/wasm/nqueens.js: build/wasm  c/main.c  c/nqueen_cpu.c  common/common.c
	$(EMCC) c/main.c c/nqueen_cpu.c common/common.c -lm -s WASM=1 -o build/wasm/nqueens.js

build/wasm/run.html: build/wasm build/wasm/nqueens.js
	cat ../../utils/wasm/run_template.html > build/wasm/run.html
	sed -i.bak s/FILENAME/$(FILENAME)/g build/wasm/run.html
	sed -i.bak s/RUN_ARGUMENT/$(WASM_RUN_ARGUMENT)/g build/wasm/run.html
	sed -i.bak s/NUM_REPETITIONS/$(NUM_REPETITIONS)/g build/wasm/run.html

# build/wasm:
# 	mkdir -p build/wasm

# build/wasm/run.html: build/wasm  c/main.c  c/nqueen_cpu.c  common/common.c
# 	$(EMCC) c/main.c c/nqueen_cpu.c common/common.c -lm  -s WASM=1 -o build/wasm/run.js

build/js:
	mkdir -p build/js

build/js/nqueens.js:
	cp js/nqueens.js build/js/

build/js/run.html: build/js build/js/nqueens.js
	cat ../../utils/js/run_template.html > build/js/run.html
	sed -i.bak s/FILENAME/$(FILENAME)/g build/js/run.html
	sed -i.bak s/RUN_ARGUMENT/$(JS_RUN_ARGUMENT)/g build/js/run.html
	sed -i.bak s/NUM_REPETITIONS/$(NUM_REPETITIONS)/g build/js/run.html
clean:
	rm -rf build
