BIN=./node_modules/.bin
DUO-TEST=$(BIN)/duo-test -R spec
TEST-BUILD=./build/testBuild.js

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

build-tests:
	@mkdir -p build/
	@$(BIN)/duo test/index.js > $(TEST-BUILD)

.PHONY: help deps deps-npm build-tests

clean:
	rm -rf node_modules/
	rm -rf components/
	rm -rf build/

.PHONY: clean

test: build-tests test-phantomjs

test-browser:
	@$(DUO-TEST) browser $(browser) -B $(TEST-BUILD)

test-phantomjs:
	@export PATH=node_modules/.bin/:$$PATH; $(DUO-TEST) phantomjs -B $(TEST-BUILD)

test-saucelabs:
	@$(DUO-TEST) saucelabs -b safari:6..7

.PHONY: test test-browser test-phantomjs
