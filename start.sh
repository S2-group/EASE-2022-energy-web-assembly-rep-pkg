#!/bin/bash

COMMAND="python3 android-runner experiment/config.json --progress /home/pi/hippiescripters/experiment/output/2021.10.24_043614/progress.xml"

until $COMMAND; do
    echo "Experiment crahsed, restarting..."
    sleep 1
done
