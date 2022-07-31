const router = require('express').Router();
const {Comment} = require('../../models');
const auth = require('../../util');

router.get('/')