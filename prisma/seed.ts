import { Prisma, PrismaClient } from '@prisma/client';
import * as crypto from 'crypto';
import permissionSeed from './seeds/permissions';
import roleSeed from './seeds/roles';
const prisma = new PrismaClient();
const permissionData: Prisma.PermissionCreateInput[] = permissionSeed;

const roleData: Prisma.RoleCreateInput[] = roleSeed;

const generateHashForRegister = (url?: string) => {
  const hash = crypto.createHash('sha256');
  if (url) hash.update(url);
  const hashValue = hash.digest('hex');
  return hashValue;
};

async function main() {
  console.log(`Start seeding ...`);
  let tenant: Prisma.TenantCreateInput;
  try {
    tenant = await prisma.tenant.upsert({
      where: {
        subdomain: 'dify',
      },
      update: {},
      create: {
        name: 'Dify.com.br',
        subdomain: 'dify',
        domain: 'dify.com.br',
        domainVerify: true,
      },
    });
    console.log(`Created tenant dify with id: ${tenant.id}`);
  } catch (error) {
    console.log(error);
    console.warn(`Roles already exists ...`);
  }
  for (const permis of permissionData) {
    try {
      const permission = await prisma.permission.create({
        data: {
          ...permis,
          tenant: {
            connect: {
              id: tenant.id,
            },
          },
        },
      });
      console.log(`Created permission with id: ${permission.id}`);
    } catch (error) {
      console.log(error);
      console.warn(`Permissions already exists ...`);
    }
  }

  let role: Prisma.RoleCreateInput;
  for (const rol of roleData) {
    try {
      const permissionGroup = await prisma.permission.findMany({
        where: {
          tenantId: tenant.id,
        },
      });
      role = await prisma.role.create({
        data: {
          ...rol,
          permissions: {
            connect: permissionGroup.map((permiss) => ({
              id: permiss.id,
            })),
          },
          tenant: {
            connect: {
              id: tenant.id,
            },
          },
        },
      });
      console.log(`Created role with id: ${role.id}`);
    } catch (error) {
      console.log(error);
      console.warn(`Roles already exists ...`);
    }
  }

  let profile: Prisma.ProfileCreateInput;
  try {
    if (tenant) {
      profile = await prisma.profile.create({
        data: {
          title: 'Owner',
          description: 'Owner profile, can update from projects',
          auth: generateHashForRegister(),
          isAdmin: true,
          redirect: '/admin',
          roles: { connect: [{ id: role.id }] },
          tenantId: tenant.id,
        },
      });
      await prisma.profile.create({
        data: {
          title: `Client`,
          description: 'Client base for site.',
          auth: generateHashForRegister(profile.id),
          isAdmin: false,
          redirect: '/',
          roles: {
            create: {
              title: `Client [${tenant.name}]`,
              description: `Client base for site ${tenant.name}`,
              tenantId: tenant.id,
            },
          },
          tenantId: tenant.id,
        },
      });
      console.log(`Created profile developer with id: ${profile.id}`);
    }
  } catch (error) {
    console.log(error);
    console.warn(`Roles already exists ...`);
  }

  try {
    if (profile) {
      await prisma.user.upsert({
        where: { email: 'douglasrafaeldoprado@gmail.com' },
        update: {
          profiles: { connect: [{ id: profile.id }] },
        },
        create: {
          id: 'TS4LQ8EpEeVSYoTbXyAXIqYqVV32',
          email: 'douglasrafaeldoprado@gmail.com',
          password: process.env.PASSWORD_DEV,
          name: 'Douglas Prado',
          isAdmin: true,
          tenantId: tenant.id,
          profiles: { connect: [{ id: profile.id }] },
        },
      });
      console.log(`Updated profile developer`);
    }
  } catch (error) {
    console.log(error);
    console.warn(`User not exists ...`);
  }

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
