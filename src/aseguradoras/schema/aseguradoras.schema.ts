import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AseguradorasDocument = HydratedDocument<Aseguradoras>;

@Schema()
export class Aseguradoras {
    @Prop()
    name: string;

    @Prop()
    logo: string;

    @Prop()
    description: string;
}

export const AseguradorasSchema = SchemaFactory.createForClass(Aseguradoras);