type Gift = {
    id: number;
    name: string;
    brand: string;
};
export declare class AppService {
    private userBirthday;
    private drawCursor;
    private readonly gifts;
    registerBirthday(birthday: string): {
        message: string;
        birthday: string;
    };
    getRemainingDaysFromBirthday(): {
        birthday: string;
        remainingDays: number;
    };
    drawGift(): {
        order: number;
        gift: Gift;
    };
    resetGiftDrawOrder(): {
        message: string;
        order: number;
    };
    getGiftById(id: number): Gift;
    private isValidDateString;
    private calculateRemainingDays;
}
export {};
