import { Module } from '@nestjs/common';
import { ConfigServiceModule } from "src/adapters/config/config-service.module";
import { AppController } from '../app.controller';
import { LivroController } from "../Livro.Controller";
import { AppService } from './app.service';

@Module({
    imports: [ConfigServiceModule.register()],
    controllers: [LivroController, AppController],
    providers: [AppService] 
})
export class ControllerModule{}