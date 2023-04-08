#! /usr/bin/env node

const colors = require('colors')
const cowsay = require("cowsay")
const prettyjson = require('prettyjson')

let info_json = require('./info.json')

const name = colors.blue(String.raw`
 __   __                       _           ___     _
|  | |  |                     (_)         |   \   | |
|  | |  |  _ __   __    __ _   _   __,_   | |\ \  | | 
|  | |  | | '_ \ /_ \  / _' | | | |  _/   | | \ \ | |
|  | |  | | | | | | | | (_| | | | | |     | |  \ \| |  _
 \_____/  |_| | | | |  \__,_| |_| |_|     |_|   \___| (_)
`)

let info = prettyjson.render({...info_json}, {
  dashColor: 'cyan',
  multilineStringColor: 'cyan',
  keysColor: 'blue',
  stringColor: 'white'
})

console.log(cowsay.say({
  text : `${name}\n${info}\n`,
  cow: cowsay.SQUIRREL,
  e : "oO",
  T : "U ",
}))
