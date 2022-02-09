const assert = require('chai').assert;
const utility = require('../utility');

describe('utility', function () {
    describe('isEmpty()', function () {
        it("checks if an input is ''", function () {
            assert.isNotOk(!utility.isEmpty(""));
        });
        it("checks if an input is null", function () {
            assert.isNotOk(!utility.isEmpty(null));
        });
        it("checks if an input is undefined", function () {
            var arg;
            assert.isNotOk(!utility.isEmpty(arg));
        });
    });
    describe('isNull()', function () {
        it("checks if an input is null", function () {
            assert.isNotOk(!utility.isNull(null));
        });
        it("checks if an input is undefined", function () {
            var arg;
            assert.isNotOk(!utility.isNull(arg));
        });
    });

    describe('setText()', function () {
        it("check if exception is thrown when both input args is null", function () {
            var result = true;
            var arg = null;
            try {
                utility.setText(arg, arg);
            } catch (e) {
                result = false;
            }
            assert.isNotOk(result);
        });
        it("check if exception is thrown when both input args is undefined", function () {
            var result = true;
            var arg;
            try {
                utility.setText(arg, arg);
            } catch (e) {
                result = false;
            }
            assert.isNotOk(result);
        });
        it("check if exception is thrown when arg1 = false, arg2 = true", function () {
            var result = true;
            var arg1 = null;
            var arg2 = "test value";
            try {
                utility.setText(arg1, arg2);
            } catch (e) {
                result = false;
            }
            assert.isNotOk(result);
        });
        it("check if exception is thrown when arg1 = true, arg2 = false", function () {
            var result = true;
            var arg1 = "testEle"; // using string as a dummy truthy obj
            var arg2 = null;
            try {
                utility.setText(arg1, arg2);
            } catch (e) {
                result = false;
            }
            assert.isNotOk(result);
        });
        it('check exception msg', function () {
            var result = "";
            var arg1 = null;
            var arg2 = "test value";
            try {
                utility.setText(arg1, arg2);
            } catch (e) {
                result = e;
            }
            assert.equal(result, "invalid input args");
        });
    });
    describe('setVisible()', function () {
        it('check if exception is thrown when arg1 = false, arg2 = false', function () {
            var result = true;
            var arg1;
            var arg2 = "false"; // this is false, as typeof is string
            try {
                utility.setVisible(arg1, arg2);
            } catch (e) {
                result = false;
            }
            assert.isNotOk(result);
        });
        it('check if exception is thrown when arg1 = true, arg2 = false', function () {
            var result = true;
            var arg1 = "testEle"; // using string as a dummy truthy obj
            var arg2 = "false"; // this is false, as typeof is string
            try {
                utility.setVisible(arg1, arg2);
            } catch (e) {
                result = false;
            }
            assert.isNotOk(result);
        });               
    });
    describe('appendChildLast()', function () {
        it('check if exception is thrown when arg1 = false, arg2 = false', function () {    
            var result = true;
            var arg1;
            var arg2; 
            try {
                utility.appendChildLast(arg1, arg2);
            } catch (e) {
                result = false;
            }
            assert.isNotOk(result);       
        });
        it('check if exception is thrown when arg1 = true, arg2 = false', function () {
            var result = true;
            var arg1 = "testEle"; // using string as a dummy truthy obj
            var arg2; 
            try {
                utility.appendChildLast(arg1, arg2);
            } catch (e) {
                result = false;
            }
            assert.isNotOk(result);
        });           
    });
});