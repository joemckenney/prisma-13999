import { PrismaClient } from 'orm.packages.users.services';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  Array(100)
    .fill(0)
    .map((_, i) => {
      return {
        name: `identified-user-${i}`,
        email: `identified-user-${i}@identified-user.com`,
        identifier: String(i).padStart(5, '0'),
        workspace: 'dopt',
        properties: {
          city: 'Oakland',
          company: 'Dopt',
          feet: 2,
          hands: 2,
          fingers: 10,
          hasPet: i > 50,
        },
      };
    })
    .forEach(async (data) => {
      await prisma.user.create({ data });
    });

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
