SHELL := /bin/bash

include ../../common/options.mk

NB_BOXES = "6"
ASMJS_RUN_ARGUMENT = "'-boxes1d', '"$(NB_BOXES)"'"
C_RUN_ARGUMENT = "-boxes1d "$(NB_BOXES)
JS_RUN_ARGUMENT = "runLavaMD("$(NB_BOXES)")"
FILENAME = "lavamd"
NUM_REPETITIONS = 7

build: build/js/run.html build/wasm/run.html

# build/wasm:
# 	mkdir -p build/wasm

# build/wasm/run.html: build/wasm \
# 			c/main.c \
# 			c/kernel/kernel_cpu.h \
# 			c/kernel/kernel_cpu.c \
# 			c/util/num/num.h \
# 			c/util/num/num.c \
# 			c/util/timer/timer.h \
# 			c/util/timer/timer.c
# 	$(EMCC) ./c/main.c \
# 			 ./c/kernel/kernel_cpu.c \
#              ./c/util/num/num.c \
# 			 ./c/util/timer/timer.c \
# 			 -I../../common \
# 			 ../../common/common_rand.c \
# 			 -s WASM=1 -lm -o build/wasm/run.html


build/wasm:
	mkdir -p build/wasm

build/wasm/lavamd.js: build/wasm \
			c/main.c \
			c/kernel/kernel_cpu.h \
			c/kernel/kernel_cpu.c \
			c/util/num/num.h \
			c/util/num/num.c \
			c/util/timer/timer.h \
			c/util/timer/timer.c
	$(EMCC) ./c/main.c \
			 ./c/kernel/kernel_cpu.c \
             ./c/util/num/num.c \
			 ./c/util/timer/timer.c \
			 -I../../common \
			 ../../common/common_rand.c \
			 -lm -s WASM=1 -o build/wasm/lavamd.js

build/wasm/run.html: build/wasm \
            build/wasm/lavamd.js
	cat ../../utils/wasm/run_template.html > build/wasm/run.html
	sed -i.bak s/FILENAME/$(FILENAME)/g build/wasm/run.html
	sed -i.bak s/RUN_ARGUMENT/$(WASM_RUN_ARGUMENT)/g build/wasm/run.html
	sed -i.bak s/NUM_REPETITIONS/$(NUM_REPETITIONS)/g build/wasm/run.html

build/js:
	mkdir -p build/js

build/js/lavamd.js: build/js
	cp js/lavamd.js build/js/lavamd.js

build/js/run.html: build/js build/js/lavamd.js
	cat ../../utils/js/run_template.html > build/js/run.html
	sed -i.bak s/FILENAME/$(FILENAME)/g build/js/run.html
	sed -i.bak s/RUN_ARGUMENT/$(JS_RUN_ARGUMENT)/g build/js/run.html
	sed -i.bak s/NUM_REPETITIONS/$(NUM_REPETITIONS)/g build/js/run.html

clean:
	rm -rf build
