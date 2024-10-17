import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Repository } from 'typeorm';
import { Menu } from './entities/menu.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MenuService {

  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
  ) {}

  async create(createMenuDto: CreateMenuDto): Promise<Menu> {
    const menu = this.menuRepository.create(createMenuDto); // Create a new Menu entity
    return await this.menuRepository.save(menu); // Save it to the database
  }
  

  async findAll(): Promise<Menu[]> {
    return await this.menuRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
