const fs = require('fs');
const path = require('path');

describe('Tailwind Realtor App Layout', () => {
  let html;
  let totalTests = 0;
  let passedTests = 0;

  beforeAll(() => {
    const filePath = path.join(__dirname, '..', './lab/index.html');
    html = fs.readFileSync(filePath, 'utf8');
  });

  const countMatches = (regex) => (html.match(regex) || []).length;

  test('should have header with flex, fixed, and bg-blue-500', () => {
    totalTests += 1;
    const hasHeader = /class=["'][^"']*flex[^"']*flex-row[^"']*justify-around[^"']*items-center[^"']*fixed[^"']*top-0[^"']*h-16[^"']*bg-blue-500/i.test(html);
    expect(hasHeader).toBe(true);
    passedTests += 1;
  });

  test('should have h1 with "Onja Real Estate" and text-2xl font-bold', () => {
    totalTests += 1;
    const hasH1 = /<h1[^>]*class=["'][^"']*text-2xl[^"']*font-bold[^"']*["'][^>]*>Onja Real Estate<\/h1>/i.test(html);
    expect(hasH1).toBe(true);
    passedTests += 1;
  });

  test('should have responsive nav ul with sm:gap-8 gap-2', () => {
    totalTests += 1;
    const hasNav = /<ul[^>]*class=["'][^"']*flex[^"']*flex-row[^"']*justify-around[^"']*items-center[^"']*sm:gap-8[^"']*gap-2[^"']*["']/.test(html);
    expect(hasNav).toBe(true);
    passedTests += 1;
  });

  test('should have nav items: Home, About, Contact', () => {
    totalTests += 3;
    expect(/<li[^>]*>Home<\/li>/i.test(html)).toBe(true);
    expect(/<li[^>]*>About<\/li>/i.test(html)).toBe(true);
    expect(/<li[^>]*>Contact<\/li>/i.test(html)).toBe(true);
    passedTests += 3;
  });

  test('should have main grid with sm:grid-cols-2, gap-4, p-4, mt-16', () => {
    totalTests += 1;
    const hasGrid = /class=["'][^"']*grid[^"']*sm:grid-cols-2[^"']*gap-4[^"']*p-4[^"']*mt-16[^"']*"/i.test(html);
    expect(hasGrid).toBe(true);
    passedTests += 1;
  });

  test('should have at least 6 house cards (section elements)', () => {
    totalTests += 1;
    const sectionCount = countMatches(/<section[^>]*class=["'][^"']*grid/i);
    expect(sectionCount).toBeGreaterThanOrEqual(6);
    passedTests += 1;
  });

  test('house cards should use grid-rows-[auto_1fr]', () => {
    totalTests += 1;
    const hasCustomRows = /grid-rows-\[auto_1fr\]/i.test(html);
    expect(hasCustomRows).toBe(true);
    passedTests += 1;
  });

  test('nested grid should have grid-cols-2 grid-rows-2 max-h-40', () => {
    totalTests += 1;
    const hasNestedGrid = /class=["'][^"']*grid[^"']*grid-cols-2[^"']*grid-rows-2[^"']*max-h-40/i.test(html);
    expect(hasNestedGrid).toBe(true);
    passedTests += 1;
  });

  test('image should span 2 rows with object-cover and rounded bottom', () => {
    totalTests += 1;
    const hasImage = /<img[^>]*class=["'][^"']*row-span-2[^"']*h-full[^"']*object-cover[^"']*rounded-b-xl/i.test(html);
    expect(hasImage).toBe(true);
    passedTests += 1;
  });

  test('at least one element should use bg-gradient with from/to', () => {
    totalTests += 1;
    const hasGradient = /bg-gradient-[a-z-]*[^"']*from-[a-z0-9%-]+[^"']*to-[a-z0-9%-]+/i.test(html);
    expect(hasGradient).toBe(true);
    passedTests += 1;
  });

  test('should use house1.jpg through house6.jpg', () => {
    totalTests += 1;
    const images = [...html.matchAll(/src=["']\.\.\/assets\/house(\d)\.jpg["']/g)].map(m => m[1]);
    const unique = new Set(images);
    expect(unique.size).toBeGreaterThanOrEqual(6);
    passedTests += 1;
  });

  afterAll(() => {
    const successRate = totalTests > 0 ? ((passedTests / totalTests) * 100).toFixed(2) : 0;
    console.log(`\nTests executed: ${totalTests}`);
    console.log(`Tests passed: ${passedTests}`);
    console.log(`Success rate: ${successRate}%\n`);
  });
});