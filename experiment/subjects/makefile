
BENCHMARKS = \
    branch-and-bound/nqueens/ \
    dense-linear-algebra/lud/ \
    dynamic-programming/nw/ \
    graphical-models/hmm/ \
    map-reduce/page-rank/ \
    n-body-methods/lavamd/ \
    sparse-linear-algebra/spmv/ \
    spectral-methods/fft/ \

all:
	for d in $(BENCHMARKS); do $(MAKE) -C $$d; done

clean:
	for d in $(BENCHMARKS); do $(MAKE) -C $$d clean; done
