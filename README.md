# Greenlab replication package
This is the replication package for the study "Comparing the energy efficiency of WebAssembly versus JavaScript in web-applications on Android devices".

This experiment made use of the Ostrich benchmarking suite, which can be found [here](https://github.com/Sable/Ostrich). All copyrights of these benchmarking algorithms belong to the license holders of the Ostrich benchmarking suite.

## Structure of the replication package
This replication package contains several directories. The `experiment` contains the Android Runner configuration, the scripts that were used during the experiment and the subjects. The `android-runner` directory contains an altered version of Android Runner. This is Android Runner with added support for the Firefox Nightly web browser. The results package contains the unprocessed results of the experiment and a Python script to aggregate the results and calculate the Joules used per run. The `figures` directory contains all the figures presented in the paper. The `rscripts` directory contains the R file used to analyse the results.

## Dependencies
This experiment uses several Python packages. To install them, use the following command:

```bash
$ python3 -m pip install -r requirements.txt
```

The experiment also depends on `adb`. Install it on the Pi:
```bash
$ sudo apt install adb
```

## Building the subjects
Building the subjects depends on [Emscripten](https://emscripten.org/). To install Emscripten on your machine, follow [these instructions](https://emscripten.org/docs/getting_started/downloads.html).

To build the subjects, execute the following commands:

```bash
$ cd experiments/subjects
$ make
```


## Running the experiment
To run the experiment, a Raspberry Pi should be configured according to the instructions in the [Android Runner repostory](https://github.com/S2-group/android-runner/blob/master/docs/rpi_ar_setup.md)

The Raspberry Pi should be connected to the same router that the Android device connects to. Place the subjects directory containing the built subjects in a directory on the Pi. To start the webserver, use the following commands:

```bash
$ cd subjects
$ python -m http.server 8001
```
We recommend running these commands in a `tmux` session, and then detach from the session.

In the config.json file in the experiments directory, change the IP addresses in the "paths" object to the IP address of the Raspberry Pi.

Now, set up the connection to the Android device. The Pi should control the device over WiFi, because the USB connection will get severed during runs. Connect the Android device to the router, and note its IP address.

In the `android-runner` directory, change the devices.json file so that the entry for "nexus6p" corresponds to "<ip address of the phone>:5555".

Run:
```bash
$ adb devices
$ adb tcpip 5555
$ adb connect <ip address of the phone>
```

Place the `android-runner` directory and the `experiment` directory on the Pi, in the same directory and navigate to that directory.

The experiment is now ready to be run. In the root directory of this repository, run the following command.

```bash
$ python3 android-runner experiment/config.json
```

Sometimes the experiment might crash due to a Trepn error. To automate restarting the experiment, interrupt the experiment once and note the path to the `progress.xml` file. In `start.sh`, replace the path placeholder to the path that you just noted. Place start.sh in the same directory as the `android-runner` and `experiment` directories and run it using:

```bash
$ bash start.sh
```
The experiment will now automatically restart if it crashes.


## Aggregating the data
In the results directory, the python script `prepare_data.py` can be used to aggregate the data of all the runs and convert the measurements to consumed Joules per run. Run it with python3.
