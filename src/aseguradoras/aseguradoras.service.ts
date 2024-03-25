import { Injectable } from '@nestjs/common';
import { CreateAseguradoraDto } from './dto/create-aseguradora.dto';
import { UpdateAseguradoraDto } from './dto/update-aseguradora.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Aseguradoras, AseguradorasDocument } from './schema/aseguradoras.schema';
import { Model } from 'mongoose';

@Injectable()
export class AseguradorasService {

  constructor(@InjectModel(Aseguradoras.name) private AseguradorasModule: Model<AseguradorasDocument>) {

  }

  async create(createAseguradoraDto: CreateAseguradoraDto) {
    const database = await this.AseguradorasModule.create(createAseguradoraDto)
    return database;
  }

  async findAll() {
    const database = await this.AseguradorasModule.find({}).exec()

    return database;
  }

  async findOne(_id: string) {
    const database = await this.AseguradorasModule.findById({ _id }).exec()
    return database;
  }

  async update(_id: string, updateAseguradoraDto: UpdateAseguradoraDto) {
    const database = await this.AseguradorasModule.findByIdAndUpdate({ _id }, updateAseguradoraDto).exec()

    return database;
  }

  async remove(_id: string) {
    const database = await this.AseguradorasModule.findByIdAndDelete({ _id })

    return database;
  }
}
