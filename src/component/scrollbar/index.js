import util from '../../common/util';

const { filterObjectKey } = util;

export default (props) => {
  const {
    chart, mode,
  } = props;
  console.log('props', props);

  if (chart && mode) {
    const filterProps = filterObjectKey(props, ['chart']);
    chart.scrollBar(filterProps);
  }
  return null;
};
