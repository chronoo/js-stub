import {Injectable} from "@nestjs/common";

@Injectable()
export class SettingsService {
    private settings: Map<string, number> = new Map<string, number>();

    setDelay(service: string, delay: number) {
        this.settings.set(service, delay)
    }

    getDelays() {
        return this.settings
    }
}
