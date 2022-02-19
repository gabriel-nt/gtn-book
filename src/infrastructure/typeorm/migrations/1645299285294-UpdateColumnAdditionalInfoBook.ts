import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class UpdateColumnAdditionalInfoBook1645299285294
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'books',
      'additional_info',
      new TableColumn({
        name: 'additional_info',
        type: 'jsonb',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'books',
      'additional_info',
      new TableColumn({
        name: 'additional_info',
        type: 'text',
      }),
    );
  }
}
