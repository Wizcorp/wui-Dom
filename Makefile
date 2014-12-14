BIN=./node_modules/.bin
DUO-TEST=$(BIN)/duo-test
TEST-BUILD=./build/testsBuild.js

define helpStarting
	@echo "  make help              Prints this help."
	@echo "  make deps              Installs all dependencies."
	@echo
	@echo "  make test              Build and run tests."
	@echo
	@echo "  make clean             Clean build and dependencies."
	@echo
endef

help:
	@echo
	$(helpStarting)

deps: deps-npm

deps-npm:
	@mkdir -p node_modules
	npm install

build:
	@echo
	@echo "Building..."
	@echo
	@mkdir -p build/
	@$(BIN)/duo test/index.js > $(TEST-BUILD)

.PHONY: help deps deps-npm build

clean:
	@echo
	@echo "Cleaning..."
	@echo
	rm -rf node_modules/
	rm -rf components/
	rm -rf build/

.PHONY: clean

test: build test-phantomjs

test-browser:
	@$(DUO-TEST) browser $(browser) -B $(TEST-BUILD)

test-phantomjs:
	@echo
	@echo "Testing on phantomjs..."
	@echo
	@export PATH=node_modules/.bin/:$$PATH; $(DUO-TEST) -R spec phantomjs -B $(TEST-BUILD)


#
# Examples of browser syntax https://github.com/yields/wd-browser
# Need to export SAUCE_USER=<yourName>
# Need to export SAUCE_KEY=<yourSaucelabsToken>
# I took latest stable version on https://github.com/yields/wd-browser/blob/1.0.1/map.json
# (by the way map.json is not up-to-date)
# (it seems with to much browser duo-test have troubles)
#
test-saucelabs: test-saucelabs-browser test-saucelabs-mobile

test-saucelabs-browser: test-saucelabs-browser-safari test-saucelabs-browser-chrome test-saucelabs-browser-ff test-saucelabs-browser-ie test-saucelabs-browser-opera

test-saucelabs-mobile: test-saucelabs-browser-iphone test-saucelabs-browser-ipad #test-saucelabs-browser-android

.PHONY: test test-browser test-phantomjs test-saucelabs test-saucelabs-browser test-saucelabs-mobile

test-saucelabs-browser-safari:
	@echo
	@echo "Testing on saucelabs for safari 7 (latest stable from wd-browser)..."
	@echo
	@$(DUO-TEST) saucelabs -b safari:7 -B $(TEST-BUILD)

test-saucelabs-browser-chrome:
	@echo
	@echo "Testing on saucelabs for chrome 36 (latest stable from wd-browser)..."
	@echo
	@$(DUO-TEST) saucelabs -b chrome:36 -B $(TEST-BUILD)

test-saucelabs-browser-ff:
	@echo
	@echo "Testing on saucelabs for firefox 31 (latest stable from wd-browser)..."
	@echo
	@$(DUO-TEST) saucelabs -b ff:31 -B $(TEST-BUILD)

test-saucelabs-browser-ie:
	@echo
	@echo "Testing on saucelabs for ie 11 (latest stable from wd-browser)..."
	@echo
	@$(DUO-TEST) saucelabs -b ie:11 -B $(TEST-BUILD)

test-saucelabs-browser-opera:
	@echo
	@echo "Testing on saucelabs for opera 12 (latest stable from wd-browser)..."
	@echo
	@$(DUO-TEST) saucelabs -b opera:12 -B $(TEST-BUILD)


test-saucelabs-browser-android:
	@echo
	@echo "Testing on saucelabs for android 4.4 (latest stable from wd-browser)..."
	@echo "(seems broken)"
	@echo
	@$(DUO-TEST) saucelabs -b android:4.4 -B $(TEST-BUILD)

test-saucelabs-browser-iphone:
	@echo
	@echo "Testing on saucelabs for iphone 7.1 (latest stable from wd-browser)..."
	@echo
	@$(DUO-TEST) saucelabs -b iphone:7.1 -B $(TEST-BUILD)

test-saucelabs-browser-ipad:
	@echo
	@echo "Testing on saucelabs for ipad 7.1 (latest stable from wd-browser)..."
	@echo
	@$(DUO-TEST) saucelabs -b ipad:7.1 -B $(TEST-BUILD)


.PHONY: test-saucelabs-browser-safari test-saucelabs-browser-chrome test-saucelabs-browser-ff test-saucelabs-browser-ie test-saucelabs-browser-opera test-saucelabs-browser-android test-saucelabs-browser-iphone test-saucelabs-browser-ipad
