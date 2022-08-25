"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// https://github.com/sendgrid/sendgrid-nodejs
const mail_1 = __importDefault(require("@sendgrid/mail"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, "./.env.local") });
mail_1.default.setApiKey((_a = process.env.SENDGRID_API_KEY) !== null && _a !== void 0 ? _a : ``);
const senderIdentity = `avi.mehenwal@dility.io`;
const msg = {
    from: senderIdentity,
    html: '<h1>Machine generated email</h1><p>Hello! This is a email generated by code :)</p><p>yay!</p>',
    subject: 'Dility: automated email',
    text: 'and easy to do anywhere, even with Node.js',
    to: 'avi.mehanwal@gmail.com',
    // to     : ['ahmed@dility.io', 'laura.olivarez@dility.io', 'avi.mehenwal@dility.io'],
};
mail_1.default.send(msg)
    .then(() => {
    console.log('Email sent');
})
    .catch((error) => {
    console.error(error);
});
