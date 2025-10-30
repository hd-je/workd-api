import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('TB_USER')
export class TbUser {
  @PrimaryGeneratedColumn({ name: 'USER_SN', type: 'bigint' })
  userSn: number;

  @Column({ name: 'USER_ID', type: 'varchar', length: 100, unique: true })
  userId: string;

  @Column({ name: 'USER_NM', type: 'varchar', length: 100 })
  userNm: string;

  @Column({ name: 'USER_PWD', type: 'varchar', length: 100, nullable: true })
  userPwd?: string;

  @Column({ name: 'PHONE', type: 'varchar', length: 20, nullable: true })
  phone?: string;

  @Column({ name: 'EMAIL', type: 'varchar', length: 100, nullable: true })
  email?: string;

  @Column({ name: 'CREATE_ID', type: 'varchar', length: 100, nullable: true })
  createId?: string;

  @Column({
    name: 'CREATE_DT',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  createDt?: Date;

  @Column({ name: 'UPDATE_ID', type: 'varchar', length: 100, nullable: true })
  updateId?: string;

  @Column({
    name: 'UPDATE_DT',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  updateDt?: Date;
}
