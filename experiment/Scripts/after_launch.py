from AndroidRunner.Device import Device
from time import sleep

# noinspection PyUnusedLocal
def main(device: Device, *args: tuple, **kwargs: dict):
    """if the browser is Firefox Nightly, set the dom.max_script_run_time to 0"""
    if args[1] == "org.mozilla.fenix":
        # Enable developer settings
        device.shell('input tap 750 2310')
        sleep(1)
        device.shell('input text about:config')
        sleep(1)
        device.shell('input tap 1304 2292')
        sleep(1)
        device.shell('input tap 1000 180')
        sleep(1)
        device.shell('input text dom.max_script_run_time')
        sleep(0.5)
        device.shell('input tap 500 500')
        sleep(0.5)
        device.shell('input tap 500 500')
        sleep(0.5)
        device.shell('input tap 1274 2094')
        sleep(0.5)
        device.shell('input tap 1274 2094')
        sleep(0.5)
        device.shell('input text 0')
