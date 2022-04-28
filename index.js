const SVGFixer = require('oslllo-svg-fixer');
const replace = require('replace-in-file');

const run = async () => {
  const source = './old-svg';
  const destination = './fixed-svg';

  const fixer = SVGFixer(source, destination, { showProgressBar: true, traceResolution: 1000 })
  await fixer.fix();

  const options = {
    files: './fixed-svg/*.svg',
    from: ['fill="none"', 'stroke="none"'],
    to: ['fill="#000"', 'stroke="#000"'],
  };

  try {
    const results = await replace(options)
    console.log('Replacement results:', results);
  }
  catch (error) {
    console.error('Error occurred:', error);
  }
}

run();