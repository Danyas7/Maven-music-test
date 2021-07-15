import fs from 'fs';
import Benchmark from 'benchmark';

const { log } = console;

const createSuite = (name) => {
    const suite = new Benchmark.Suite(name);

    log(`\n=== ${name} ==`);
    suite.on('cycle', (event) => { log(String(event.target)) });
    suite.on('complete', function() { log('Fastest is ' + this.filter('fastest').map('name')) });

    return suite;
};

const bench = (name, val) => {
    const suite = createSuite(name);
    suite.add('JSON.parse', function() { JSON.parse(val) });
    suite.run();
};

const benchTryCatch = (name, val) => {
    const suite = createSuite(name);
    suite.add('JSON.parse (try-catch)', function() { try { JSON.parse(val) } catch (err) { return val } });
    suite.run();
};

const pkg = fs.readFileSync('./data.json', 'utf-8');
bench('standard object', pkg);
benchTryCatch('try/catch object', pkg.substr(0, pkg.length - 1));

