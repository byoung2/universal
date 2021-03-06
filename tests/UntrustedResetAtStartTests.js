/*
 * Reset on System Startup Tests with Untrusted Config
 *
 * Copyright 2018 OCAD University
 *
 * Licensed under the New BSD license. You may not use this file except in
 * compliance with this License.
 *
 * You may obtain a copy of the License at
 * https://github.com/GPII/universal/blob/master/LICENSE.txt
 */

"use strict";

var fluid = require("infusion"),
    gpii = fluid.registerNamespace("gpii");

fluid.registerNamespace("gpii.tests.untrusted.resetAtStart");

require("./shared/ResetAtStartTestDefs.js");

gpii.tests.untrusted.resetAtStart.buildTestDefs = function (testDefs) {
    return fluid.transform(testDefs, function (testDef) {
        return fluid.extend(true, {
            config: {
                configName: "gpii.tests.acceptance.untrusted.resetAtStart.config",
                configPath: "%gpii-universal/tests/configs"
            },
            gradeNames: ["gpii.test.common.lifecycleManagerReceiver", "gpii.test.common.testCaseHolder", "gpii.test.integration.testCaseHolder.linux"]
        }, testDef);
    });
};

gpii.test.bootstrapServer(gpii.tests.untrusted.resetAtStart.buildTestDefs(gpii.tests.resetAtStart.testDefs));
