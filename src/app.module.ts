import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AseguradorasModule } from './aseguradoras/aseguradoras.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'img'), // Directorio donde están las imágenes
      serveRoot: '/file', // Ruta en la que se servirán las imágenes
    }),
    AseguradorasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
