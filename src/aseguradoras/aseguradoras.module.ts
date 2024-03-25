import { Module } from '@nestjs/common';
import { AseguradorasService } from './aseguradoras.service';
import { AseguradorasController } from './aseguradoras.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Aseguradoras, AseguradorasSchema } from './schema/aseguradoras.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Aseguradoras.name,
        schema: AseguradorasSchema
      }
    ])
  ],
  controllers: [AseguradorasController],
  providers: [AseguradorasService],
})
export class AseguradorasModule { }
