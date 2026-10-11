import { promises as fs } from 'fs';

const demoData = {
  categories: 8,
  products: 24,
  stores: 4,
  seedLabel: 'demo-data',
};

async function main() {
  await fs.writeFile('./.seed-log.json', JSON.stringify(demoData, null, 2), 'utf8');
  console.log('Demo seed data prepared successfully.');
}

main();
