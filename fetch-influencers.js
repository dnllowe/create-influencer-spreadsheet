"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
// Format the header for the csv
// Customize as needed for the data you want from your API
var csv = '';
csv += 'Email,';
csv += 'Manager Contact,';
csv += 'Name,';
csv += 'YouTube Account,';
csv += 'YouTube Avg Views,';
csv += 'YouTube Follower Count,';
csv += 'YouTube Username,';
csv += 'YouTube Views,';
csv += 'Twitch Account,';
csv += 'Twitch Avg Views,';
csv += 'Twitch Follower Count,';
csv += 'Twitch Username,';
csv += 'Twitch Views,';
csv += 'Twitter Account,';
csv += 'Twitter Favorite Count,';
csv += 'Twitter Follower Count,';
csv += 'Twitter Username\n';
// Helper function to write the CSV rows
// Make sure these match the order of the header
function appendResultsToCsv(profile, csv) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    csv += profile.email;
    csv += ',';
    csv += profile.manager_contact;
    csv += ',';
    csv += profile.name;
    csv += ',';
    csv += (_a = profile.youtube) === null || _a === void 0 ? void 0 : _a.account_url;
    csv += ',';
    csv += (_b = profile.youtube) === null || _b === void 0 ? void 0 : _b.avg_view_count;
    csv += ',';
    csv += (_c = profile.youtube) === null || _c === void 0 ? void 0 : _c.follower_count;
    csv += ',';
    csv += (_d = profile.youtube) === null || _d === void 0 ? void 0 : _d.username;
    csv += ',';
    csv += (_e = profile.youtube) === null || _e === void 0 ? void 0 : _e.view_count;
    csv += ',';
    csv += (_f = profile.twitch) === null || _f === void 0 ? void 0 : _f.account_url;
    csv += ',';
    csv += (_g = profile.twitch) === null || _g === void 0 ? void 0 : _g.avg_view_count;
    csv += ',';
    csv += (_h = profile.twitch) === null || _h === void 0 ? void 0 : _h.follower_count;
    csv += ',';
    csv += (_j = profile.twitch) === null || _j === void 0 ? void 0 : _j.username;
    csv += ',';
    csv += (_k = profile.twitch) === null || _k === void 0 ? void 0 : _k.view_count;
    csv += ',';
    csv += (_l = profile.twitter) === null || _l === void 0 ? void 0 : _l.account_url;
    csv += ',';
    csv += (_m = profile.twitter) === null || _m === void 0 ? void 0 : _m.favorite_count;
    csv += ',';
    csv += (_o = profile.twitter) === null || _o === void 0 ? void 0 : _o.follower_count;
    csv += ',';
    csv += (_p = profile.twitter) === null || _p === void 0 ? void 0 : _p.username;
    csv += '\n';
    return csv;
}
function wait(ms) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(function () {
                        resolve();
                    }, ms);
                })];
        });
    });
}
var currentCount = 0;
var totalCount = 0;
var reportedTotalCount = false;
function fetchInfluencers(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, body, i, result, profile;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url, { method: 'get' })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    body = _a.sent();
                    // Just some reporting so we know what to expect
                    if (body.count && !reportedTotalCount) {
                        totalCount = body.count;
                        console.log("Found " + totalCount + " results");
                        reportedTotalCount = true;
                    }
                    // Found some results, 
                    if (body.results) {
                        console.log("Writing " + body.results.length + " results to csv");
                        for (i = 0; i < body.results.length; i++) {
                            result = body.results[i];
                            profile = result.profile;
                            csv = appendResultsToCsv(profile, csv);
                        }
                        // Better to continually update the CSV with each batch
                        // Just in case you hit an error mid-way through
                        // This is also where you'd change the name of the output file to your liking
                        fs.writeFileSync('influencers.csv', csv);
                        console.log("Finished writing " + body.results.length + " to csv");
                        currentCount += body.results.length;
                        console.log("Completed " + currentCount + " / " + totalCount + " results");
                    }
                    if (!body.next) return [3 /*break*/, 5];
                    console.log("More results found...");
                    console.log("Waiting 1 second before continuing");
                    // In case you're in danger of hitting a request limit
                    // And to be nice to their server :)
                    return [4 /*yield*/, wait(1000)];
                case 3:
                    // In case you're in danger of hitting a request limit
                    // And to be nice to their server :)
                    _a.sent();
                    return [4 /*yield*/, fetchInfluencers(body.next)];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    });
}
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Let's find some influencers!...");
                    url = "https://core.woovit.com/api/v1/public-profiles/?limit=100&offset=0&ordering=relevance&search=indie+games";
                    return [4 /*yield*/, fetchInfluencers(url)];
                case 1:
                    _a.sent();
                    console.log("I'm finished!");
                    return [2 /*return*/];
            }
        });
    });
}
run();
