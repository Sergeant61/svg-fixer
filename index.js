const SVGFixer = require('oslllo-svg-fixer');

const run = async () => {
  const source = './old-svg';
  const destination = './fixed-svg';

  const fixer = SVGFixer(source, destination, { showProgressBar: true, traceResolution: 1000 })
  await fixer.fix();
}

run();