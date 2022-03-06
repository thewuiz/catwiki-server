"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var urlEndPoint = process.env.BASE_URL;
axios_1.default.defaults.headers.common["x-api-key"] = process.env.API_KEY || "";
// ==============================================================================================
// ==============================================================================================
var getAllBreeds = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios_1.default
                        .get("".concat(urlEndPoint, "/breeds"))
                        .then(function (response) {
                        var breeds = [];
                        var data = response.data;
                        for (var key in data) {
                            breeds.push({
                                id: data[key].id,
                                name: data[key].name,
                                description: data[key].description,
                                image: data[key].image,
                            });
                        }
                        return res.json(breeds);
                    })
                        .catch(function (err) {
                        return res.status(400).json({ errors: err });
                    })];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/, res.status(400).json({ errors: error_1 })];
            case 3: return [2 /*return*/];
        }
    });
}); };
// ==============================================================================================
// ==============================================================================================
var getBreedsBySearch = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var search;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                search = req.query.search;
                if (!search) return [3 /*break*/, 2];
                return [4 /*yield*/, axios_1.default
                        .get("".concat(urlEndPoint, "/breeds/search"), {
                        params: { q: search },
                    })
                        .then(function (response) {
                        var breeds = [];
                        var data = response.data;
                        for (var key in data) {
                            breeds.push({ id: data[key].id, name: data[key].name });
                        }
                        return res.json(breeds);
                    })
                        .catch(function (err) {
                        return res.status(500).json({
                            errors: err,
                        });
                    })];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2: return [2 /*return*/, getAllBreeds(req, res)];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getBreedById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, size, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                size = "small";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios_1.default
                        .get("".concat(urlEndPoint, "/images/search"), {
                        params: {
                            breed_id: id,
                            size: size,
                        },
                    })
                        .then(function (response) {
                        return res.json(response.data);
                    })];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                return [2 /*return*/, res.status(500).json({
                        errors: err_1,
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
// ==============================================================================================
// ==============================================================================================
var getImagesByBreedId = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var size, _a, breedId, limit, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                size = "small";
                _a = req.params, breedId = _a.breedId, limit = _a.limit;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios_1.default
                        .get("".concat(urlEndPoint, "/images/search"), {
                        params: { breed_id: breedId, limit: limit, size: size },
                    })
                        .then(function (response) {
                        var data = response.data;
                        var breedImages = [];
                        for (var key in data) {
                            for (var breed in data[key].breeds) {
                                breedImages.push({
                                    image_url: data[key].url,
                                });
                            }
                        }
                        return res.json(breedImages);
                    })];
            case 2:
                _b.sent();
                return [3 /*break*/, 4];
            case 3:
                err_2 = _b.sent();
                return [2 /*return*/, res.status(500).json({
                        errors: err_2,
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
// ==============================================================================================
// ==============================================================================================
var getRandomImages = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var mime_types, size, limit, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                mime_types = "png", size = "thumb";
                limit = req.params.limit;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios_1.default
                        .get("".concat(urlEndPoint, "/images/search"), {
                        params: { limit: limit, mime_types: mime_types, size: size },
                    })
                        .then(function (response) {
                        return res.json(response.data);
                    })];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_3 = _a.sent();
                return [2 /*return*/, res.status(500).json({
                        errors: err_3,
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
var getBreedsImage = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var limit, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                limit = req.params.limit;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios_1.default
                        .get("".concat(urlEndPoint, "/breeds"), {
                        params: { limit: limit },
                    })
                        .then(function (response) {
                        var data = response.data;
                        var arrayImage = [];
                        for (var key in data) {
                            arrayImage.push({
                                id: data[key].id,
                                name: data[key].name,
                                image_url: data[key].image.url,
                            });
                        }
                        return res.json(arrayImage);
                    })
                        .catch(function (err) {
                        return res.status(400).json({ errors: err });
                    })];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                return [2 /*return*/, res.status(400).json({ errors: error_2 })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.default = {
    getBreedsBySearch: getBreedsBySearch,
    getAllBreeds: getAllBreeds,
    getImagesByBreedId: getImagesByBreedId,
    getBreedsImage: getBreedsImage,
    getRandomImages: getRandomImages,
    getBreedById: getBreedById,
};
