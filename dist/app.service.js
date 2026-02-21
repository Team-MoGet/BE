"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    constructor() {
        this.userBirthday = null;
        this.drawCursor = 0;
        this.gifts = [
            { id: 1, name: '빼빼로', brand: '이마트24' },
            { id: 2, name: '치킨', brand: 'BHC' },
            { id: 4, name: '꽝', brand: '꽝' },
            { id: 3, name: '파인트 아이스크림', brand: '배스킨라빈스' },
            { id: 5, name: '에어팟', brand: 'apple' },
        ];
    }
    registerBirthday(birthday) {
        if (!this.isValidDateString(birthday)) {
            throw new common_1.BadRequestException('birthday must be YYYY-MM-DD');
        }
        this.userBirthday = birthday;
        return {
            message: 'birthday registered',
            birthday: this.userBirthday,
        };
    }
    getRemainingDaysFromBirthday() {
        if (!this.userBirthday) {
            throw new common_1.BadRequestException('birthday is not registered');
        }
        const remainingDays = this.calculateRemainingDays(this.userBirthday);
        return {
            birthday: this.userBirthday,
            remainingDays,
        };
    }
    drawGift() {
        if (this.drawCursor >= this.gifts.length) {
            throw new common_1.BadRequestException('no more gifts to draw');
        }
        const gift = this.gifts[this.drawCursor];
        this.drawCursor += 1;
        return {
            order: this.drawCursor,
            gift,
        };
    }
    resetGiftDrawOrder() {
        this.drawCursor = 0;
        return {
            message: 'draw order reset',
            order: this.drawCursor,
        };
    }
    getGiftById(id) {
        const gift = this.gifts.find((item) => item.id === id);
        if (!gift) {
            throw new common_1.NotFoundException('gift not found');
        }
        return gift;
    }
    isValidDateString(value) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
            return false;
        }
        const [year, month, day] = value.split('-').map(Number);
        const date = new Date(year, month - 1, day);
        return (date.getFullYear() === year &&
            date.getMonth() === month - 1 &&
            date.getDate() === day);
    }
    calculateRemainingDays(birthday) {
        const [_, month, day] = birthday.split('-').map(Number);
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        let nextBirthday = new Date(today.getFullYear(), month - 1, day);
        if (nextBirthday < today) {
            nextBirthday = new Date(today.getFullYear() + 1, month - 1, day);
        }
        const diffMs = nextBirthday.getTime() - today.getTime();
        return Math.floor(diffMs / (1000 * 60 * 60 * 24));
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map