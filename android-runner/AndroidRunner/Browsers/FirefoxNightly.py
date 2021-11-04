from .Browser import Browser


class FirefoxNightly(Browser):
    def __init__(self, config):
        super(FirefoxNightly, self).__init__(config)
        self.package_name = 'org.mozilla.fenix'
        self.main_activity = 'org.mozilla.gecko.BrowserApp'

    def to_string(self):
        return self.package_name
