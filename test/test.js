/*
 * Copyright (c) 2020-2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const bedrock = require('bedrock');
require('bedrock-https-agent');
require('bedrock-mongodb');
require('authorize-operation-middleware');

require('bedrock-test');
bedrock.start();
