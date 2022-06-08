import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { HomepageService } from './homepage.service';

@ApiTags('Homepage')
@Controller('homepage')
export class HomepageController {
  constructor(private readonly homepageService: HomepageService) {}

  @Get(':profileId')
  @ApiOperation({
    summary: 'Visualizar um jogo favorito pelo ID',
  })
  findOne(@Param('profileId') profileId: string) {
    return this.homepageService.findOne(profileId);
  }
}
