from .Browsers import Chrome, Firefox, FirefoxNightly, Opera


class BrowserFactory(object):
    @staticmethod
    def get_browser(name):
        if name == "chrome":
            return Chrome.Chrome
        if name == "firefox":
            return Firefox.Firefox
        if name == "fenix":
            return FirefoxNightly.FirefoxNightly
        if name == "opera":
            return Opera.Opera
        raise Exception("No Browser found")
