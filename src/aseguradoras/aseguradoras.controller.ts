import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Bind, UploadedFile } from '@nestjs/common';
import { AseguradorasService } from './aseguradoras.service';
import { CreateAseguradoraDto } from './dto/create-aseguradora.dto';
import { UpdateAseguradoraDto } from './dto/update-aseguradora.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { storage } from 'src/utils/logger/storage.handle';

@Controller('aseguradoras')
export class AseguradorasController {
  constructor(private readonly aseguradorasService: AseguradorasService) { }

  @Post()
  create(@Body() createAseguradoraDto: CreateAseguradoraDto) {
    return this.aseguradorasService.create(createAseguradoraDto);
  }

  @Get()
  findAll() {
    return this.aseguradorasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aseguradorasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAseguradoraDto: UpdateAseguradoraDto) {
    return this.aseguradorasService.update(id, updateAseguradoraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aseguradorasService.remove(id);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', { storage }))
  @Bind(UploadedFile())
  uploadFile(file) {
    console.log(file)
    return file
  }
}
