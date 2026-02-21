import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    registerBirthday(body: {
        birthday: string;
    }): {
        message: string;
        birthday: string;
    };
    getRemainingDays(): {
        birthday: string;
        remainingDays: number;
    };
    drawGift(): {
        order: number;
        gift: {
            id: number;
            name: string;
            brand: string;
        };
    };
    resetGiftDrawOrder(): {
        message: string;
        order: number;
    };
    getGiftById(id: number): {
        id: number;
        name: string;
        brand: string;
    };
}
