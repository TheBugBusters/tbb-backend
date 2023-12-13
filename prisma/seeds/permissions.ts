import { Prisma } from '@prisma/client';
import { PermissionPermission } from '../../src/permission/permission.enum';
import { ProfilePermission } from '../../src/profile/profile.enum';
import { RolePermission } from '../../src/role/role.enum';
import { UserPermission } from '../../src/user/user.enum';
import { ContentPermission } from './../../src/content/content.enum';
import { SalePermission } from './../../src/sale/sale.enum';
import { TenantPermission } from './../../src/tenant/tenant.enum';
import { WorkflowPermission } from './../../src/workflow/workflow.enum';

export const workflowPermissionSeed: Prisma.PermissionCreateInput[] = [
  {
    code: WorkflowPermission.Create,
    description: 'workflow.create',
  },
  {
    code: WorkflowPermission.Show,
    description: 'workflow.show',
  },
  {
    code: WorkflowPermission.List,
    description: 'workflow.list',
  },
  {
    code: WorkflowPermission.Update,
    description: 'workflow.update',
  },
  {
    code: WorkflowPermission.Delete,
    description: 'workflow.delete',
  },
];

export const contentPermissionSeed: Prisma.PermissionCreateInput[] = [
  {
    code: ContentPermission.Create,
    description: 'content.create',
  },
  {
    code: ContentPermission.Show,
    description: 'content.show',
  },
  {
    code: ContentPermission.List,
    description: 'content.list',
  },
  {
    code: ContentPermission.Update,
    description: 'content.update',
  },
  {
    code: ContentPermission.Delete,
    description: 'content.delete',
  },
];

export const salePermissionSeed: Prisma.PermissionCreateInput[] = [
  {
    code: SalePermission.Create,
    description: 'sale.create',
  },
  {
    code: SalePermission.Show,
    description: 'sale.show',
  },
  {
    code: SalePermission.List,
    description: 'sale.list',
  },
  {
    code: SalePermission.Update,
    description: 'sale.update',
  },
  {
    code: SalePermission.Delete,
    description: 'sale.delete',
  },
];

export const permissionPermissionSeed: Prisma.PermissionCreateInput[] = [
  {
    code: PermissionPermission.Create,
    description: 'permission.create',
  },
  {
    code: PermissionPermission.Show,
    description: 'permission.show',
  },
  {
    code: PermissionPermission.List,
    description: 'permission.list',
  },
  {
    code: PermissionPermission.Update,
    description: 'permission.update',
  },
  {
    code: PermissionPermission.Delete,
    description: 'permission.delete',
  },
];

export const rolePermissionSeed: Prisma.PermissionCreateInput[] = [
  {
    code: RolePermission.Create,
    description: 'role.create',
  },
  {
    code: RolePermission.Show,
    description: 'role.show',
  },
  {
    code: RolePermission.List,
    description: 'role.list',
  },
  {
    code: RolePermission.Update,
    description: 'role.update',
  },
  {
    code: RolePermission.Delete,
    description: 'role.delete',
  },
];

export const profilePermissionSeed: Prisma.PermissionCreateInput[] = [
  {
    code: ProfilePermission.Create,
    description: 'profile.create',
  },
  {
    code: ProfilePermission.Show,
    description: 'profile.show',
  },
  {
    code: ProfilePermission.List,
    description: 'profile.list',
  },
  {
    code: ProfilePermission.Update,
    description: 'profile.update',
  },
  {
    code: ProfilePermission.Delete,
    description: 'profile.delete',
  },
];

export const userPermissionSeed: Prisma.PermissionCreateInput[] = [
  {
    code: UserPermission.Create,
    description: 'user.create',
  },
  {
    code: UserPermission.Show,
    description: 'user.show',
  },
  {
    code: UserPermission.List,
    description: 'user.list',
  },
  {
    code: UserPermission.Update,
    description: 'user.update',
  },
  {
    code: UserPermission.Delete,
    description: 'user.delete',
  },
];

export const tenantPermissionSeed: Prisma.PermissionCreateInput[] = [
  {
    code: TenantPermission.Create,
    description: 'tenant.create',
  },
  {
    code: TenantPermission.Show,
    description: 'tenant.show',
  },
  {
    code: TenantPermission.List,
    description: 'tenant.list',
  },
  {
    code: TenantPermission.Update,
    description: 'tenant.update',
  },
  {
    code: TenantPermission.Delete,
    description: 'tenant.delete',
  },
];

export default [
  ...workflowPermissionSeed,
  ...contentPermissionSeed,
  ...salePermissionSeed,
  ...permissionPermissionSeed,
  ...rolePermissionSeed,
  ...profilePermissionSeed,
  ...userPermissionSeed,
  ...tenantPermissionSeed,
];
